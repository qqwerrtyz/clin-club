"use client"
import Welcome from "@/components/portal/main/Welcom"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import MyModules from "@/components/portal/main/MyModules"
import EveryDayPractic from "@/components/portal/main/EveryDayPractic"
import LeadersBoard from "@/components/portal/main/LeadersBoard"
import Calendar from "@/components/portal/main/Calendar"
import { useEffect } from "react"


export default function PortalStudent() {
      useEffect(() => {
            // Добавляем ключ nameModule в localStorage если его нет
            let nameModule = localStorage.getItem("nameModule");
            
            if (!nameModule) {
                localStorage.setItem("nameModule", "");
            }
    
            
    
            
        }, []) // Этот хук вытащим врегистрацию
    return (
        <>
            
            <div className="indexPortal">
                
                <div className=" indexPortalWelcomWrapper">
                    <Welcome />
                </div>
                <div className=" myModulesWrapper">
                    <MyModules />

                </div>
                <EveryDayPractic />
                <LeadersBoard />
                <div className=" calendarStudent">
                    <Calendar />
                </div>
            </div>
        </>
    )
}