"use client"
import HeaderChat from "@/components/portal/chat/HeaderChat";
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import BodyChat from "@/components/portal/chat/BodyChat";
import FooterChat from "@/components/portal/chat/FooterChat";
import Chats from "@/components/portal/chat/chats/Chats";
import { useState } from "react";


export default function Chat() {
    const [openCahts, setOpenCahts] = useState(true)
    return (
        <div className="chatWrapper">

            {openCahts  && <Chats setOpenCahts={setOpenCahts}/>}          
            
            
            <div className="chat">
                <HeaderChat setOpenCahts={setOpenCahts}/>
                <BodyChat />
                <FooterChat />
            </div>
        </div>
    )
}