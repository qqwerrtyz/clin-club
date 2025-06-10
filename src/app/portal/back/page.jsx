"use client"
import Image from "next/image"
import imagesIndex from "@/components/Index/imagesIndex"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import { useRouter } from "next/navigation"

export default function Back() {
    const router = useRouter()
    return (
        <div onClick={() => router.back()} className="backWrapper">
            <Image className="backImage" src={imagesIndex.back}/>
            <span className="backText">Назад</span>
        </div>
    )
} 