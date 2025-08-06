"use client"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import DecideInWeekOrMonth from "@/components/portal/teacherAnalytics/decideInWeekOrMonth/DecideInWeekOrMonth"
import TeacherAnalitycsDiagram from "@/components/portal/teacherAnalytics/diagram/TeacherAnalitycsDiagram"
import SummaryAnalytics from "@/components/portal/teacherAnalytics/summary/SummaryAnalytics"
import YourAskQuestions from "@/components/portal/teacherAnalytics/yourAskQuestions/YourAskQuestions"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function TeacherAnalytics() {
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
        <div className="teacherAnalytics">
            <div className="TeacherAnalyticsColumn1">

                <SummaryAnalytics />
                
                <DecideInWeekOrMonth />
            </div>

            <div className="teacherAnalyticsColumn2">
                <TeacherAnalitycsDiagram />

                <YourAskQuestions />
            </div>
        </div>
    )
}