"use client"

import AnalyticsFrequency from "@/components/portal/analytics/frequency/AnalyticsFrequency";
// import "../pageCss/page.css"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"


import AnalyticsSlovedModule from "@/components/portal/analytics/slovedModule/AnalyticsSlovedModule";
import AnalyticsTaskForWeek from "@/components/portal/analytics/taskForWeek/AnalyticsTaskForWeek";
import ErrorTask from "@/components/portal/analytics/errorTask/ErrorTask";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Analytics() {
    // const canvasTest = useRef(null);
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

    


   
  
    
   
    return (
        <div className="analyticsWrapper">
            <div className="analytics">
                <div className="analyticsColumn1">
                    <AnalyticsSlovedModule />
                    <AnalyticsFrequency />
                </div>
                {/* analyticsColumn1 */}

                <div className="analyticsColumn2">
                    <AnalyticsTaskForWeek /> 
                    <ErrorTask /> 
                </div>

                

            </div>
        </div>
    )
}