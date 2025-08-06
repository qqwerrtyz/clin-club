"use client"
import Welcome from "@/components/portal/main/Welcom"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import MyModules from "@/components/portal/main/MyModules"
import EveryDayPractic from "@/components/portal/main/EveryDayPractic"
import LeadersBoard from "@/components/portal/main/LeadersBoard"
import Calendar from "@/components/portal/main/Calendar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PortalStudent() {
    const router = useRouter();

    useEffect(() => {
        // Проверяем роль пользователя
        const role = localStorage.getItem("role");
        if (role !== "student") {
        router.push("/");
        return;
        }

        // Инициализируем nameModule, если ещё нет
        if (!localStorage.getItem("nameModule")) {
        localStorage.setItem("nameModule", "");
        }
    }, [router]);
    

      useEffect(() => {
            // Добавляем ключ nameModule в localStorage если его нет
            let nameModule = localStorage.getItem("nameModule");
            
            if (!nameModule) {
                localStorage.setItem("nameModule", "");
            }
        }, []) // Этот хук вытащим в регистрацию
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