"use client"

import Image from "next/image";
import sort from "../../../../../public/imgs/portal/main/sort.png"
import { useRef, useState } from "react";

export default function SortAndDropDown () {
    const [isOpen, setIsOpen] = useState(false);
    const myModulesSortWrapper = useRef(null)
    const myModulesSortDropDown = useRef(null)

    function dropDownOpen() {

        if (myModulesSortWrapper && myModulesSortWrapper) {
            if (!isOpen) {
                myModulesSortWrapper.current.style.opacity = .3;
                setIsOpen(prev => !prev)
            } else {
                myModulesSortWrapper.current.style.opacity = 1;
                setIsOpen(prev => !prev)
            }
            
        }
    }

    return (
        <div className="myModulesSortAndDropdownWrapper">
            <div
                onClick={dropDownOpen}
                ref={myModulesSortWrapper}
                className="myModulesSortWrapper"
                style={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <span className="myModulesSortText">Сортировка</span>
                <Image className="myModulesSortIcon" src={sort}/>
            </div>
            
            <div ref={myModulesSortDropDown} className={`${!isOpen ? "dNone" : ""} `}>
                <div  className={`myModulesSortDropDown`}>
                    <span className="myModulesSortItem">По возрастанию</span>
                    <span className="myModulesSortItem">По убыванию</span>
                </div>
            </div>
            
        </div>
    )
}