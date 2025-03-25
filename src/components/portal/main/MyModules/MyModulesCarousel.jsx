"use client"
import Image from "next/image";
import goLeft from "../../../../../public/imgs/portal/main/goLeft.png";
import goRight from "../../../../../public/imgs/portal/main/goRight.png";


import { useEffect, useRef, useState } from "react";
export default function MyModulesCarousel() {
    const [offset, setOffset] = useState(0)
    const myModulesCarousel = useRef(null);
    const myModulesItem = useRef(null);
    const moduleLists = [
        {
            name: "Педиатрия fnvfjn fj nfn dfnlfdnv",
            author: "Раян Гослингш",
            progress: 20
        },

        {
            name: "Биологиче",
            author: "Тонни Старка",
            progress: 56
        },

        {
            name: "Анатомия",
            author: "Дональд Трамп",
            progress: 93
        },

        {
            name: "Гистология",
            author: "Дональд Дак",
            progress: 11
        },

        {
            name: "Что-то еще",
            author: "Дональд Дак",
            progress: 14
        },

        {
            name: "Биохимия",
            author: "Тонни Старка",
            progress: 56
        },

        {
            name: "Анатомия",
            author: "Дональд Трамп",
            progress: 93
        },

        {
            name: "Гистология",
            author: "Дональд Дак",
            progress: 11
        },

        {
            name: "Что-то еще",
            author: "Дональд Дак",
            progress: 14
        },

        {
            name: "wwww",
            author: "www Дак",
            progress: 14
        },
        
    ]

    const bgClass = [ "pinkBg", "purpleBg", "greenBg", "blueBg"]


    function carouselClick(event) {
        if (myModulesCarousel && myModulesItem) {
            let offsetWidth = myModulesItem.current.offsetWidth;
            if (event.target.classList.contains("myModulesGoLeft")) {
                setOffset(prev => {
                    const test = myModulesCarousel.current.offsetWidth + offsetWidth
                    if (prev <= -test ) {
                        debugger
                        return prev 
                    }

                    // 10 -- это margin-right 
                    return prev - offsetWidth - 10
                })
                return
            } else if (event.target.classList.contains("myModuleGoRight")) {
                setOffset(prev => {
                    // Выставили границы за которые выходить нельзя
                    if (prev >= 0) {
                        return prev = 0
                    };

                    // 10 -- это margin-right 
                    return prev + offsetWidth + 10
                })
            }


            
            
        }
    }

    useEffect(()=> {
        if (myModulesCarousel && myModulesItem) {
            myModulesCarousel.current.style.width = myModulesItem.current.offsetWidth * moduleLists.length + 1 + "px"
            // Смещаем
            myModulesCarousel.current.style.transform = `translate(${offset}px)`;
        }
    }, [offset])


    return (
        <div className="myModulesCarouselAndArrows">
            <button 
                onClick={carouselClick}
                type="button"
                className="myModulesButton myModuleGoRightWrapper"
            >
                <Image className="myModuleGoRight" src={goRight}/>
            </button>
            <div className="myModulesCarouselWrapper">
                <div ref={myModulesCarousel} className="myModulesCarousel">
                    {
                        moduleLists.map((item, index) => {
                            return (
                                <div 
                                    ref={myModulesItem}
                                    key={`${item}_${index}`}
                                    className={`myModulesItem ${bgClass[index % bgClass.length]}`}
                                >
                                    <div className="myModulesItemNameWrapper">
                                        <span className="textColorWhite myModulesItemName">{item.name}</span>
                                    </div>

                                    <div className="myModulesItemAuthorWrapper">
                                        <span className="textColorWhite myModulesItemAuthor">{item.author}</span>
                                    </div>

                                    <div className="myModulesItemProgressWrapper">
                                        <span className="textColorWhite myModulesItemProgress">{item.progress}%</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                
            </div>
            <button 
                onClick={carouselClick}
                type="button"
                className="myModulesButton myModuleGoLeftWrapper"
            >
                <Image className="myModulesGoLeft" src={goLeft}/>
            </button>
        </div>
    )
}