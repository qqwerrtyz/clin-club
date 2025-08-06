// "use client"
// import "@/app/portal/pageCss/page.css"
// import "@/app/portal/pageCss/page.media.css"
// import HeaderProfile from "@/components/portal/myprofile/HeaderProfile"

// import BodyProfile from "@/components/portal/myprofile/BodyProfile"
// import FooterProfile from "@/components/portal/myprofile/FooterProfile"
// import { createContext, useEffect, useState } from "react"

// export default function MyProfile() {
//     const [userData, setUserData] = useState(null);
//     const [err, setErr] = useState(null);
//     const [loading, setLoading] = useState(false)
    
//     useEffect(() => {
//         const fetchConditions = async () => {
//             try {
//                 const response = await fetch('https://api.clinclub.ru/v1/students/stats/');
//                 if (!response.ok) {
//                     throw new Error('Ошибка загрузки условий');
//                 }
//                 const data = await response.json();
//                 setUserData(data);
//             } catch (err) {
//                 setErr(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchConditions();

//     }, [])
//     return (
        
//         <div className="myProfileWrapper">
//             <div className="myProfile">
//                 <HeaderProfile />

//                 <BodyProfile />
//                 <button onClick={() => console.log(userData)}>kfnvkfn</button>
                
//                 <FooterProfile />
//             </div>
//         </div>
//     )
// }


"use client"

import { createContext, useEffect, useState } from "react"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import HeaderProfile from "@/components/portal/myprofile/HeaderProfile"
import BodyProfile from "@/components/portal/myprofile/BodyProfile"
import FooterProfile from "@/components/portal/myprofile/FooterProfile"

// Создаём контекст для статистики
export const StatsContext = createContext({
  userData: null,
  loading: false,
  error: null
})

export default function MyProfile() {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      setError(null)

      try {
        const accessToken = localStorage.getItem("access")
        if (!accessToken) {
          throw new Error("Токен отсутствует — выполните вход")
        }

        // Получаем роль из localStorage
        const role = localStorage.getItem("role")
        let endpoint = ""

        if (role === "student") {
          endpoint = "students"
        } else if (role === "teacher") {
          endpoint = "teacher"
        } else {
          throw new Error("Неизвестная роль пользователя")
        }

        const response = await fetch(
          `https://api.clinclub.ru/v1/auth/${endpoint}/me/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + accessToken
            }
          }
        )

        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        setUserData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  // Показываем индикатор загрузки
  if (loading) {
    return (
      <div className="myProfileWrapper">
        <div
          className="loading-message"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          Загрузка статистики...
        </div>
      </div>
    )
  }

  // Показываем индикатор загрузки
  if (loading) {
    return (
      <div className="myProfileWrapper">
        <div className="loading-message" style={{ textAlign: "center", marginTop: "2rem" }}>
          Загрузка статистики...
        </div>
      </div>
    )
  }

  // Показываем ошибку, если что-то пошло не так
  if (error) {
    return (
      <div className="myProfileWrapper">
        <div className="error-message" style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
          {error}
        </div>
      </div>
    )
  }

  // Если данные успешно загружены, пробрасываем их через контекст
  return (
    <StatsContext.Provider value={{ userData, loading, error }}>
      <div className="myProfileWrapper">
        <div className="myProfile">
          <HeaderProfile />
          <BodyProfile />
          <button onClick={() => console.log(userData)}>Debug Stats</button>
          <FooterProfile />
        </div>
      </div>
    </StatsContext.Provider>
  )
}