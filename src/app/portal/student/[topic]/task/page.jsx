"use client";
import InspectionData from "@/components/portal/task/InspectionData";
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import Questions from "@/components/portal/task/Questions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Task() {
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
        <div className="taskWrapper">
            <div className="tas">
                <div className="taskQuestionAndInspectionDataWrapper">
                    <p className="taskQuestion">
                        Мужчина, 54 года, обратился в поликлинику с жалобами на периодические боли в 
                        эпигастрии, которые возникают спустя 1-2 часа после еды. Боли купируются приемом
                        антацидов. Также отмечает изжогу и отрыжку кислым. В анамнезе – курение на протяжении
                        30 лет, употребление алкоголя по выходным. Вес пациента снизился на 4 кг 
                        за последние 3 месяца. 
                    </p>
                    <p className="taskQuestion">
                        Мужчина, 54 года, обратился в поликлинику с жалобами на периодические боли в 
                        эпигастрии, которые возникают спустя 1-2 часа после еды. Боли купируются приемом
                        антацидов. Также отмечает изжогу и отрыжку кислым. В анамнезе – курение на протяжении
                        30 лет, употребление алкоголя по выходным. Вес пациента снизился на 4 кг 
                        за последние 3 месяца. 
                    </p>
                   
                </div>
                {/* taskQuestionWrapper */}
                <InspectionData />

                <Questions />

                <div className="taskSendWrapper">
                    <button type="button" className="blueBg textColorWhite taskSend">Проверить</button>
                </div>
            </div>
        </div>
    )
}