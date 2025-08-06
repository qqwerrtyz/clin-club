// import InputReg from "@/components/reg/InputReg";
// import "@/app/css/index.css"
// import "@/app/css/index.media.css"
// import Image from "next/image";
// import imagesIndex from "@/components/Index/imagesIndex";
// import Link from "next/link";

// export default function Login() {
//     return (
//         <div className="loginWrapper">
//             <div className="regLogoWrapper">
//                 <Image className="regLogo" src={imagesIndex.logo}/>
//             </div>

//             <div className="regTextWrapper">
//                 <span className="regHeadline">Авторизируйтесь</span>
//             </div>

//             <div className="login">
//                 <InputReg placeholder={"Почта"}/>
//                 <InputReg placeholder={"Пароль"} name={"password"}/>


//                 <Link style={{display: "flex", alignItems: "center", justifyContent: "center"}} href={"/portal/student"} className="regNext">Войти</Link>
//             </div>
//         </div>
//     )
// }

"use client"
import { useEffect, useState } from "react";
import InputReg from "@/components/reg/InputReg";
import "@/app/css/index.css";
import "@/app/css/index.media.css";
import Image from "next/image";
import imagesIndex from "@/components/Index/imagesIndex";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //  Автоматический редирект если пользователь уже авторизован
  useEffect(() => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");
    if (access && refresh) {
      router.push("/portal/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.clinclub.ru/v1/auth/jwt/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Ошибка авторизации");
      }
      // сохраняем токены в localStorage
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      // перенаправление после успеха
      router.push("/portal/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="regLogoWrapper">
        <Image className="regLogo" src={imagesIndex.logo} alt="Логотип" />
      </div>

      <div className="regTextWrapper">
        <span className="regHeadline">Авторизируйтесь</span>
      </div>

      <form className="login" onSubmit={handleSubmit}>
        <InputReg
          name="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputReg
          name="password"
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="regNext"
          disabled={loading}
          style={{ marginTop: '1rem' }}
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>

        {error && (
          <div className="error-message" style={{ color: 'red', marginTop: '0.5rem' }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
