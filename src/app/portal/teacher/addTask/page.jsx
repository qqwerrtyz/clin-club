"use client"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import AdditionalConditions from "@/components/portal/addTask/additionalConditions/AdditionalConditions"
import AddQuestions from "@/components/portal/addTask/questions/AddQuestions"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function AddTask() {
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
        <div className="teacherAddTask">
            <div className="teacherAddTaskHeadlineWrapper">
                <span className="teacherAddTaskHeadline">Задача 1</span>
            </div>

            <div className="teacherTaskConditionsWrapper">
                <textarea placeholder="Введите условия задачи" className="teacherTaskCondition"/>
            </div>

            <div className="additionalConditionsTaskWrapper">
                <div className="additionalConditionsHeaderWrapper">
                    <span className="additionalConditionsHeader">Дополнительные условия</span>
                </div>

                <AdditionalConditions />
            </div>

            <div className="questionsTeacherWrapper">
                <div className="questionTeacherHeader">
                    <span className="questionTeacherHeadline">Вопросы</span>
                </div>

                <AddQuestions />
            </div>

            <button className="questionTeacherSave">Сохранить</button>
        </div>
    )
}