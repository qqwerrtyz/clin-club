// import "@/app/portal/pageCss/page.css"
// import "@/app/portal/pageCss/page.media.css"

// export default function News() {
//     const newsList = [
//         "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
//         "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
//         "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
//         "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
//         "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
//         "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
//     ]
//     return (
//         <div className="newsWrapper">
//             {
//                 newsList.map((item, index) => {
//                     return (
//                         <div className="newsItem">
//                             <span className="newsItemText">{item}</span>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import "@/app/portal/pageCss/page.css";
import "@/app/portal/pageCss/page.media.css";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      // Если нет токена — отправим на логин
      router.push("/login");
      return;
    }

    fetch("https://api.clinclub.ru/v1/news/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          // Токен просрочен или невалиден
          localStorage.removeItem("access");
          router.push("/login");
          throw new Error("Unauthorized");
        }
        if (!res.ok) {
          throw new Error("Ошибка при загрузке новостей");
        }
        return res.json();
      })
      .then((data) => {
        // Предполагаем, что data — это массив объектов новостей
        // с полями title и content
        setNewsList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [router]);

  return (
    <div className="newsWrapper">
      {newsList.length === 0 ? (
        <p>Загрузка новостей...</p>
      ) : (
        newsList.map((item) => (
          <div key={item.id} className="newsItem">
            <h3 className="newsItemTitle">{item.title}</h3>
            <p className="newsItemText">{item.content}</p>
          </div>
        ))
      )}
    </div>
  );
}