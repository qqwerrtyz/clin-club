"use client"

import Image from "next/image";
import sort from "../../../../public/imgs/portal/main/sort.png"
import goLeft from "../../../../public/imgs/portal/main/goLeft.png"
import { useEffect, useRef, useState } from "react";

export default function MyModules() {
    const [offset, setOffset] = useState(0)
    const myModulesCarousel = useRef(null);
    const myModulesItem = useRef(null);

    const moduleLists = [
        {
            name: "Педиатрия",
            author: "Раян Гослингш",
            progress: 20
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
    ]

    const bgClass = [ "pinkBg", "purpleBg", "greenBg", "blueBg"]


    function carouselClick() {
        if (myModulesCarousel && myModulesItem) {
            let offsetWidth = myModulesItem.current.offsetWidth;
            setOffset(prev => {
                if (prev <= -myModulesCarousel.current.offsetWidth + offsetWidth) {
                    
                    return prev
                }

                return prev - offsetWidth
            })
        }
    }

    useEffect(()=> {


        if (myModulesCarousel) {
            // Выставляем ширину

            // Смещаем
            myModulesCarousel.current.style.transform = `translate(${offset}px)`;
        }
    }, [offset])

    return (
        <div className="divContainer myModulesWrapper">
            <div className="myModules">

                <div className="myModulesHeadlineAndSort">
                    <div className="myModulesHeadlineWrapper">
                        <span className="textColorBlack myModulesHeadline">Мои модули</span>
                    </div>

                    <div className="myModulesSortWrapper">
                        <span className="myModulesSortText">Сортировка</span>
                        <Image className="myModulesSortIcon" src={sort}/>
                    </div>
                </div>

                <div className="myModulesCarouselAndGoLeft">
                    <div className="myModulesCarouselWrapper">
                        <div ref={myModulesCarousel} className="myModulesCarousel">
                            {
                                moduleLists.map((item, index) => {
                                    return (
                                        <div 
                                            ref={myModulesItem}
                                            key={`${item}_${index}`}
                                            className={`myModulesItem ${bgClass[index]}`}
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

                        <div className="myModuleGoLeftWrapper">
                            <Image onClick={carouselClick} className="myModulesGoLeft" src={goLeft}/>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </div>
    )
}