// import Header from "./header"

// import "./headerFooterCss/portalHeaderFooter.css"
// import "./headerFooterCss/portalHeaderFooter.media.css"
// import Footer from "./Footer"
// import Back from "./back/page"


// export default function RootLayout({ children }) {
//     return (
//         <>
//             <Header />
//             <div className="portalBody">
                
//                 <div className="portalContent">
//                     <Back />
//                     {children}
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     )
// }

// app/portal/layout.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./header";
import Footer from "./Footer";
import Back from "./back/page";
import "./headerFooterCss/portalHeaderFooter.css";
import "./headerFooterCss/portalHeaderFooter.media.css";

export default function RootLayout({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyTokens = async () => {
      const access = localStorage.getItem("access");
      const refresh = localStorage.getItem("refresh");

      // если нет даже рефреша — сразу на логин
      if (!access && !refresh) {
        return router.replace("/login");
      }

      // 1) пробуем верифицировать access
      if (access) {
        const res = await fetch("https://api.clinclub.ru/v1/auth/jwt/verify/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: access }),
        });
        if (res.ok) {
          return setChecking(false);
        }
        // если access невалиден, пойдём дальше на refresh
      }

      // 2) пробуем рефрешить по refresh‑токену
      if (refresh) {
        const verifyRefresh = await fetch(
          "https://api.clinclub.ru/v1/auth/jwt/verify/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: refresh }),
          }
        );

        // если рефреш тоже невалиден — на логин
        if (!verifyRefresh.ok) {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          return router.replace("/login");
        }

        // 3) если рефреш валидный — запросим новый access
        const newTokenRes = await fetch(
          "https://api.clinclub.ru/v1/auth/jwt/refresh/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh }),
          }
        );
        if (newTokenRes.ok) {
          const { access: newAccess } = await newTokenRes.json();
          localStorage.setItem("access", newAccess);
          return setChecking(false);
        } else {
          // и тут не получилось — на логин
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          return router.replace("/login");
        }
      }

      // по‑умолчанию редирект
      router.replace("/login");
    };

    verifyTokens();
  }, [router]);

  // пока идёт проверка — можно показать спиннер или пустоту
  if (checking) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Проверка данных...
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="portalBody">
        <div className="portalContent">
          <Back />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
