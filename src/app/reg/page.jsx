"use client"
import "@/app/css/index.css"
import "@/app/css/index.media.css"
import Reg1 from "@/components/reg/Reg1"
import imagesIndex from "@/components/Index/imagesIndex"
import Image from "next/image"
import Reg2 from "@/components/reg/Reg2"
import Reg3 from "@/components/reg/Reg3"
import Reg4 from "@/components/reg/Reg4"
import { useRef, useState } from "react"
import ProgressReg from "@/components/reg/ProgressReg"
export default function Reg() {
    const regCarouselRef = useRef(null) 

    const [offsettStep, setOffsetStep] = useState(0)

    function offsetCarouselNext() {

        if (!offsettStep && !regCarouselRef) return
        const precent = 100;
        const offset = offsettStep - precent;
        regCarouselRef.current.style.marginLeft = offset + "%";

        // regCarouselRef.current.style.transform = `translateX(${offset})`;
        setOffsetStep(prev => {
            const result = prev - precent
            return result
        })
    }

    return (
        <div className="regWrapper">
            <div className="regLogoWrapper">
                <Image className="regLogo" src={imagesIndex.logo}/>
            </div>
            <div className="regCarouselWrapper">
                <div ref={regCarouselRef} className="regCarousel">
                    <Reg1 nextStep={offsetCarouselNext}/>
                    <Reg2 nextStep={offsetCarouselNext}/>
                    <Reg3 nextStep={offsetCarouselNext}/>
                    <Reg4 />
                </div>
            </div>

            <ProgressReg offsettStep={offsettStep} />
        </div>
    )
}