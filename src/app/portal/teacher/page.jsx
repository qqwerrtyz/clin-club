"use client"
import TeacherWelcomeBack from "@/components/portal/teacherMain/TeacherWelcomeBack"
// import "./pageCss/page.css"
// import "./pageCss/page.media.css"

import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"

import MyModules from "@/components/portal/main/MyModules"
import Calendar from "@/components/portal/main/Calendar"
import BestCase from "@/components/portal/teacherMain/BestCase"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PortalTeacher() {
    
    const router = useRouter();

    useEffect(() => {
        // Проверяем роль пользователя
        const role = localStorage.getItem("role");
        if (role !== "teacher") {
        router.push("/");
        return;
        }

        // Инициализируем nameModule, если ещё нет
        if (!localStorage.getItem("nameModule")) {
        localStorage.setItem("nameModule", "");
        }
    }, [router]);
    
    return (
        <div className="teacherMainPage">
            <div className="teacherMainPageColumn1">
                <TeacherWelcomeBack />

                <div className="teacherModuleWrapper">
                    <MyModules />
                </div>
            </div>

            <div className="teacherMainPageColumn2">
                <div className="calendarTeacherWrapper">
                    <Calendar />
                </div>

                <div className="bestCaseWrapper">
                    <BestCase />
                </div>
            </div>
        </div>
    )
}