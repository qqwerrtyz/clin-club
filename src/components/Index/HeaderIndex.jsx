"use client"
import menuIcon from "../../../public/imgs/landing/headerIndex/menu.png"
import crossIcon from "../../../public/imgs/landing/headerIndex/cross.png"
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";


export default function HeaderIndex() {
    const menuRef = useRef(null);
    const crossRef = useRef(null);
    const burgerMenu = useRef(null)

    function openCLoseMenu(event) {
        if (menuRef && crossRef && burgerMenu) {
            if (event.target == menuRef.current) {
                menuRef.current.classList.remove("dBlock");
                menuRef.current.classList.add("dNone");

                burgerMenu.current.classList.remove("dNone");
                burgerMenu.current.classList.add("dBlock");
            } else {
                burgerMenu.current.classList.remove("dBlock");
                burgerMenu.current.classList.add("dNone");

                menuRef.current.classList.remove("dNone");
                menuRef.current.classList.add("dBlock");
            }
            
        }
    }
    
    return (
        <header className="headerIndexWrapper">
            <div className="headerIndex">
                <div className="headerIndexLogoWrapper">
                    <span className="headerIndexLogo" style={{color: "#5edcc3"}}>Clin.<span style={{color: "#878ed2"}}>Club</span></span>
                </div>

                <div className="desctopVersion headerIndexMenu">
                    <span className="headerIndexMenuElem"><Link href="#sectionPrice">Тарифы</Link></span>
                    <span className="headerIndexMenuElem"><Link href="#sectionRewievs">Отзывы</Link></span>
                    <span className="headerIndexMenuElem"><a href="https://t.me/iliyamaksimovich">Поддержка</a></span>
                </div>

                <div className="desctopVersion headerIndexButtonWrapper">
                    <Link style={{display: "flex", alignItems: "center"}} className="blueBg textColorWhite headerIndexSignIn" href={"/login"}>
                        Войти
                    </Link>
                    <Link style={{display: "flex", alignItems: "center"}} className="headerIndexReg" href={"/reg"}>Регистрация</Link>
                </div>

                <div className="mobileVersion headerIndexMenuAndButtons">
                    <div className="dBlock headerIndexBurgerIconWrapper">
                        <Image
                            src={menuIcon}
                            ref={menuRef}
                            onClick={openCLoseMenu}
                            className="headerIndexMenu"
                        />
                    </div>
                    <div ref={burgerMenu} className="dNone headerIndexMenuListsWrapper">
                        <div className="headerIndexMenuLists ">
                            <Image 
                                src={crossIcon}
                                className="headerIndexCross"
                                ref={crossRef}
                                onClick={openCLoseMenu}
                            />
                            <span className="headerIndexMenuElem"><Link href="#sectionPrice">Тарифы</Link></span>
                            <span className="headerIndexMenuElem"><Link href="#sectionRewievs">Отзывы</Link></span>
                            <span className="headerIndexMenuElem"><a href="https://t.me/iliyamaksimovich">Поддержка</a></span>
                        </div>
                    </div>

                    <div className="headerIndexButtonWrapper">
                        <button className="blueBg textColorWhite headerIndexSignIn">Войти</button>
                        <button className="headerIndexReg">Регистрация</button>
                    </div>
                </div>
            </div>
        </header>
    )
}