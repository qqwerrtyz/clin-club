"use client"
import Image from "next/image";
import search from "../../../../public/imgs/portal/main/search.png"
import goLeft from "../../../../public/imgs/portal/main/goLeft.png"
import Link from "next/link";
import { useRef, useState } from "react";

export default function Welcome () {
    const indexPortalWelcomInputWrapper = useRef(null);
    const indexPortalDropDownThemsWrapper = useRef(null);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)

    function openDropDown() {
        setIsOpenDropDown(prev => !prev);
    }

    const thems = [
        {
            urlSlug: "pediatriya",
            showText: "Педиатрия"
        },

        {
            urlSlug: "obshaya-hirurgiya",
            showText: "Общая хирургия"
        },
    ];

    return (
        <div className="divContainer indexPortalWelcomWrapper">
            <div className="indexPortalHelloWrapper">
                <span className="textColorBlack indexPortalHello">Привет, Лиза</span>
            </div>

            <h1 className="textColorBlack indexPortalWelcom">Добра пожаловать обратно</h1>


            <div 
                ref={indexPortalWelcomInputWrapper}
                className="blueBg indexPortalWelcomInputWrapper"
                onClick={openDropDown}
            >
                
                <div className="indexPortalIconTextWrapper">
                    <div className="indexPortalSearchIconWrapper">
                        <Image className="indexPortalSearchIcon" src={search}/>
                    </div>

                    <div className="indexPortalSeatchTextWrapper">
                        <span className="textColorWhite indexPortalSeatchText">Поиск темы...</span>
                    </div>
                </div>

                <div className="indexPortalSelectThemeWrapper">
                    <span className="textColorWhite indexPortalSelectTheme">Выбрать тему</span>
                </div>
                
            </div>

            <div
                ref={indexPortalDropDownThemsWrapper}
                className={`blueBg indexPortalDropDownThemsWrapper ${!isOpenDropDown ? "dNone" : ""}`}
            >
                <div className=" indexPortalDropDownThems">
                    {
                        thems.map((item, index) => {
                            return (
                                <Link 
                                    href={`/portal/${item.urlSlug}`}
                                    key={`${item.urlSlug}_${index}`}
                                    className="indexPortalDropDownLink"
                                >
                                    <div className="indexPortalDropDownItemWrapper">
                                        <span className="textColorBlack indexPortalDropDownItem">{item.showText}</span>
                                        <Image className="indexPortalIconGoLeft" src={goLeft}/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )

}