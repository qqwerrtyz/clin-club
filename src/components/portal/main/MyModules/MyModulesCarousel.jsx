// "use client"
// import Image from "next/image";
// import goLeft from "../../../../../public/imgs/portal/main/goLeft.png";
// import goRight from "../../../../../public/imgs/portal/main/goRight.png";


// import { useEffect, useRef, useState } from "react";
// export default function MyModulesCarousel() {
//     const [offset, setOffset] = useState(0)
//     const myModulesCarousel = useRef(null);
//     const myModulesItem = useRef(null);
//     const moduleLists = [
//         {
//             name: "Педиатрия fnvfjn fj nfn dfnlfdnv",
//             author: "Раян Гослингш",
//             progress: 20
//         },

//         {
//             name: "Биологиче",
//             author: "Тонни Старка",
//             progress: 56
//         },

//         {
//             name: "Анатомия",
//             author: "Дональд Трамп",
//             progress: 93
//         },

//         {
//             name: "Гистология",
//             author: "Дональд Дак",
//             progress: 11
//         },

//         {
//             name: "Что-то еще",
//             author: "Дональд Дак",
//             progress: 14
//         },

//         {
//             name: "Биохимия",
//             author: "Тонни Старка",
//             progress: 56
//         },

//         {
//             name: "Анатомия",
//             author: "Дональд Трамп",
//             progress: 93
//         },

//         {
//             name: "Гистология",
//             author: "Дональд Дак",
//             progress: 11
//         },

//         {
//             name: "Что-то еще",
//             author: "Дональд Дак",
//             progress: 14
//         },

//         {
//             name: "wwww",
//             author: "www Дак",
//             progress: 14
//         },
        
//     ]

//     const bgClass = [ "pinkBg", "purpleBg", "greenBg", "blueBg"]


//     function carouselClick(event) {
//         if (myModulesCarousel && myModulesItem) {
//             let offsetWidth = myModulesItem.current.offsetWidth;
//             if (event.target.classList.contains("myModulesGoLeft")) {
//                 setOffset(prev => {
//                     const test = myModulesCarousel.current.offsetWidth + offsetWidth
//                     if (prev <= -test ) {
//                         debugger
//                         return prev 
//                     }

//                     // 10 -- это margin-right 
//                     return prev - offsetWidth - 10
//                 })
//                 return
//             } else if (event.target.classList.contains("myModuleGoRight")) {
//                 setOffset(prev => {
//                     // Выставили границы за которые выходить нельзя
//                     if (prev >= 0) {
//                         return prev = 0
//                     };

//                     // 10 -- это margin-right 
//                     return prev + offsetWidth + 10
//                 })
//             }


            
            
//         }
//     }

//     useEffect(()=> {
//         if (myModulesCarousel && myModulesItem) {
//             myModulesCarousel.current.style.width = myModulesItem.current.offsetWidth * moduleLists.length + 1 + "px"
//             // Смещаем
//             myModulesCarousel.current.style.transform = `translate(${offset}px)`;
//         }
//     }, [offset])


//     return (
//         <div className="myModulesCarouselAndArrows">
//             <button 
//                 onClick={carouselClick}
//                 type="button"
//                 className="myModulesButton myModuleGoRightWrapper"
//             >
//                 <Image className="myModuleGoRight" src={goRight}/>
//             </button>
//             <div className="myModulesCarouselWrapper">
//                 <div ref={myModulesCarousel} className="myModulesCarousel">
//                     {
//                         moduleLists.map((item, index) => {
//                             return (
//                                 <div 
//                                     ref={myModulesItem}
//                                     key={`${item}_${index}`}
//                                     className={`myModulesItem ${bgClass[index % bgClass.length]}`}
//                                 >
//                                     <div className="myModulesItemNameWrapper">
//                                         <span className="textColorWhite myModulesItemName">{item.name}</span>
//                                     </div>

//                                     <div className="myModulesItemAuthorWrapper">
//                                         <span className="textColorWhite myModulesItemAuthor">{item.author}</span>
//                                     </div>

//                                     <div className="myModulesItemProgressWrapper">
//                                         <span className="textColorWhite myModulesItemProgress">{item.progress}%</span>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

                
//             </div>
//             <button 
//                 onClick={carouselClick}
//                 type="button"
//                 className="myModulesButton myModuleGoLeftWrapper"
//             >
//                 <Image className="myModulesGoLeft" src={goLeft}/>
//             </button>
//         </div>
//     )
// }

// "use client"

// import Image from "next/image";
// import goLeft from "../../../../../public/imgs/portal/main/goLeft.png";
// import goRight from "../../../../../public/imgs/portal/main/goRight.png";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function MyModulesCarousel() {
//   const [offset, setOffset] = useState(0);
//   const [modules, setModules] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const carouselRef = useRef(null);
//   const itemRef = useRef(null);

//   const bgClass = ["pinkBg", "purpleBg", "greenBg", "blueBg"];

//   // Загрузка модулей в зависимости от роли
//   useEffect(() => {
//     const fetchModules = async () => {
//       setLoading(true);
//       const token = localStorage.getItem("access");
//       const role = localStorage.getItem("role"); // "student" или "teacher"
//       let url;

//       if (role === "teacher") {
//         url = "https://api.clinclub.ru/v1/teacher/modules/";
//       } else {
//         // сюда можно подставить реальный эндпоинт для студента
//         url = "https://api.clinclub.ru/v1/student/modules/";
//       }

//       try {
//         const res = await fetch(url, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!res.ok) throw new Error("Не удалось загрузить модули");
//         const data = await res.json();
//         setModules(data);
//       } catch (e) {
//         console.error(e);
//         setModules([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModules();
//   }, []);

//   // Обновляем размеры и смещение карусели
//   useEffect(() => {
//     if (!loading && carouselRef.current && itemRef.current) {
//       const itemWidth = itemRef.current.offsetWidth + 10; // + margin
//       carouselRef.current.style.width = `${itemWidth * modules.length}px`;
//       carouselRef.current.style.transform = `translate(${offset}px)`;
//     }
//   }, [offset, loading, modules.length]);

//   const handleArrow = (dir) => {
//     if (!carouselRef.current || !itemRef.current) return;
//     const itemWidth = itemRef.current.offsetWidth + 10;
//     const maxOffset = -(carouselRef.current.offsetWidth - carouselRef.current.parentElement.offsetWidth);

//     setOffset((prev) => {
//       if (dir === "left") {
//         // двигаем влево (отрицательное смещение)
//         return Math.max(prev - itemWidth, maxOffset);
//       } else {
//         // вправо
//         return Math.min(prev + itemWidth, 0);
//       }
//     });
//   };

//   if (loading) {
//     return <div className="myModulesCarouselAndArrows">Загрузка модулей...</div>;
//   }

//   return (
//     <div className="myModulesCarouselAndArrows">
//       <button
//         onClick={() => handleArrow("right")}
//         type="button"
//         className="myModulesButton myModuleGoRightWrapper"
//       >
//         <Image className="myModuleGoRight" src={goRight} alt="left" />
//       </button>

//       <div className="myModulesCarouselWrapper">
//         <div ref={carouselRef} className="myModulesCarousel">
//           {modules.map((mod, idx) => (
//             <div
//               ref={idx === 0 ? itemRef : null}
//               key={mod.id}
//               className={`myModulesItem ${bgClass[idx % bgClass.length]}`}
              
//             >
//             <Link href={""}>
//               <div className="myModulesItemNameWrapper">
//                 <span className="textColorWhite myModulesItemName">{mod.name}</span>
//               </div>

//               <div className="myModulesItemAuthorWrapper">
//                 <span className="textColorWhite myModulesItemAuthor">{mod.discipline}</span>
//               </div>

//               <div className="myModulesItemProgressWrapper">
//                 {/* Для преподавателя у нас нет прогресса — можно убрать или поставить 0 */}
//                 <span className="textColorWhite myModulesItemProgress">—</span>
//               </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={() => handleArrow("left")}
//         type="button"
//         className="myModulesButton myModuleGoLeftWrapper"
//       >
//         <Image className="myModulesGoLeft" src={goLeft} alt="right" />
//       </button>
//     </div>
//   );
// }

"use client"

import Image from "next/image"
import Link  from "next/link"
import { useEffect, useRef, useState } from "react"

import goLeft  from "../../../../../public/imgs/portal/main/goLeft.png"
import goRight from "../../../../../public/imgs/portal/main/goRight.png"

export default function MyModulesCarousel() {
  const [offset,  setOffset ] = useState(0)
  const [modules, setModules] = useState([])
  const [loading, setLoading] = useState(true)
  const carouselRef = useRef(null)
  const itemRef     = useRef(null)

  const bgClass = ["pinkBg", "purpleBg", "greenBg", "blueBg"]

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true)
      const token = localStorage.getItem("access")
      const role  = localStorage.getItem("role")
      const url   = role === "teacher"
        ? "https://api.clinclub.ru/v1/teacher/modules/"
        : "https://api.clinclub.ru/v1/student/modules/"

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (!res.ok) throw new Error("Не удалось загрузить модули")
        setModules(await res.json())
      } catch (e) {
        console.error(e)
        setModules([])
      } finally {
        setLoading(false)
      }
    }
    fetchModules()
  }, [])

  useEffect(() => {
    if (!loading && modules.length && carouselRef.current && itemRef.current) {
      const step = itemRef.current.offsetWidth + 10
      carouselRef.current.style.width     = `${step * modules.length}px`
      carouselRef.current.style.transform = `translateX(${offset}px)`
    }
  }, [offset, loading, modules.length])

  const handleArrow = (dir) => {
    if (!carouselRef.current || !itemRef.current) return
    const step      = itemRef.current.offsetWidth + 10
    const maxOffset = -(carouselRef.current.offsetWidth - carouselRef.current.parentElement.offsetWidth)

    setOffset(prev =>
      dir === "left"
        ? Math.max(prev - step, maxOffset)
        : Math.min(prev + step, 0)
    )
  }

  if (loading) {
    return <div className="myModulesCarouselAndArrows">Загрузка модулей...</div>
  }

  return (
    <div className="myModulesCarouselAndArrows">
      <button onClick={() => handleArrow("right")} className="myModulesButton myModuleGoRightWrapper">
        <Image className="myModuleGoRight" src={goRight} alt="вперёд" />
      </button>
 
      <div className="myModulesCarouselWrapper">
        <div ref={carouselRef} className="myModulesCarousel">
          {modules.map((mod, idx) => (
            <Link
              key={mod.id}
              href={`/portal/teacher/modules/${mod.id}/`}
              onClick={(event)=> {
                console.log(mod.id)
              }}
            >
              <div
                ref={idx === 0 ? itemRef : null}
                className={`myModulesItem ${bgClass[idx % bgClass.length]}`}
              >
                <div className="myModulesItemNameWrapper">
                  <span className="textColorWhite myModulesItemName">
                    {mod.name}
                  </span>
                </div>
                <div className="myModulesItemAuthorWrapper">
                  <span className="textColorWhite myModulesItemAuthor">
                    {mod.discipline}
                  </span>
                </div>
                <div className="myModulesItemProgressWrapper">
                  <span className="textColorWhite myModulesItemProgress">—</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button onClick={() => handleArrow("left")} className="myModulesButton myModuleGoLeftWrapper">
        <Image className="myModulesGoLeft" src={goLeft} alt="назад" />
      </button>
    </div>
  )
}