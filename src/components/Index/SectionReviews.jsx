"use client"

import Image from "next/image";
import star from "../../../public/imgs/landing/sectionRewievs/star.png"
import go from "../../../public/imgs/landing/sectionRewievs/go.png"
import back from "../../../public/imgs/landing/sectionRewievs/back.png"
import avatar from "../../../public/imgs/landing/sectionRewievs/avatar.png"
import { useEffect, useRef, useState } from "react";

export default function SectionReviews() {
    const [offset, setOffset] = useState(0);
    const buttonGo = useRef(null);
    const buttonBack = useRef(null);
    const offsetWrapper = useRef(null);
    const offsetItem = useRef(null)

    function carousel(event) {
        let element = event.target.closest("button")
        if (buttonBack && buttonBack && offsetWrapper && offsetItem) {
            let offsetWidth = offsetItem.current.offsetWidth;
            if (element.classList[0] === "sectionRewievsGo") {
                setOffset(prev => {
                    // Выставили границы за которые выходить нельзя
                    if (prev == -offsetWrapper.current.offsetWidth + offsetWidth) {
                        return -offsetWrapper.current.offsetWidth + offsetWidth
                    }
                    return prev - offsetWidth
                })
            } else {
                setOffset(prev => {
                    // Выставили границы за которые выходить нельзя
                    if (prev >= 0) return 0;
                    return prev + offsetWidth
                })
            }
        }
    }
    useEffect(() => {
        // Мутим смещение: чтобы ссмещение происходило когда изменяется offset
        if (!offsetWrapper.current) return;
        offsetWrapper.current.style.transform = `translate(${offset}px)`

    }, [offset])

    return(
        <div className="sectionRewievsWrapper" id="sectionRewievs">
            <div className="sectionRewievs">
                <div className="sectionRewievsCarouselWrapper">

                    <div className="sectionRewievsItemWrapper" ref={offsetWrapper} >
                        <div className="sectionRewievsItem" ref={offsetItem}>
                            <div className="sectionRewievsHeader">
                                <Image alt="avatar" className="sectionRewievsAvatar" src={avatar}/>
                            </div>

                            <div className="sectionRewievsBody">
                                <h5 className="sectionRewievsHeadline">Каюм Шишкин</h5>
                                <p className="sectionRewievsDescription">Lorem ipsum dolor sit amet consectetur. Diam at vitae nulla ut interdum 
                                    hendrerit condimentum. Sed iaculis lacus sit cum bibendum. </p>
                                
                                <div className="sectionRewievsStarWrapper">
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                </div>

                                
                            </div>
                        </div>
                        {/* sectionRewievsItem */}

                        <div className="sectionRewievsItem" ref={offsetItem}>
                            <div className="sectionRewievsHeader">
                                <Image alt="avatar" className="sectionRewievsAvatar" src={avatar}/>
                            </div>

                            <div className="sectionRewievsBody">
                                <h5 className="sectionRewievsHeadline">Каюм Шишкин</h5>
                                <p className="sectionRewievsDescription">Lorem ipsum dolor sit amet consectetur. Diam at vitae nulla ut interdum 
                                    hendrerit condimentum. Sed iaculis lacus sit cum bibendum. </p>
                                
                                <div className="sectionRewievsStarWrapper">
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                    <Image alt="star" className="sectionRewievsStar" src={star}/>
                                </div>

                                
                            </div>
                        </div>
                        {/* sectionRewievsItem */}

                    </div>

                </div>
                
                <button ref={buttonGo} type="button" className="sectionRewievsGo" onClick={carousel}> 
                    <Image className="sectionRewievsBtn" src={go}/>
                </button>
                <button ref={buttonBack} type="button" className="sectionRewievsBack" onClick={carousel}> 
                    <Image className="sectionRewievsBtn" src={back}/>
                </button>

               
            </div>
        </div>
    )
}