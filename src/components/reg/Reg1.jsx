"use client"
import imagesIndex from "@/components/Index/imagesIndex";
import Image from "next/image";
import { useState } from "react";

export default function Reg1({nextStep}) {
    const [selectedRole, setSelectedRole] = useState(null);
    
    const selectRoleClick = (role) => {
        setSelectedRole(role);
        // Отправка данных на сервер
        sendRoleToServer(role);
    };

    const sendRoleToServer = (role) => {
        console.log("Выбранная роль отправлена на сервер:", role);
        // Реальная реализация:
        /*
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role }),
        })
        */
    };

    // Стиль для выбранного блока
    const selectedStyle = {
        backgroundColor: "#92B7FF",
        color: "white" // Добавлено изменение цвета текста
    };

    // Стиль для текста в выбранном блоке
    const textStyle = (role) => ({
        color: selectedRole === role ? "white" : "inherit"
    });

    return (
        <div className="reg1">
            <div className="regTextWrapper">
                <span className="regHeadline">Регистрация</span>
                <p className="regDescription">
                    Lorem ipsum dolor sit amet consectetur. Sed massa quis dignissim arcu sollicitudin et molestie ullamcorper.
                </p>
            </div>

            <div className="regRoleWrapper">
                {/* Блок для студента */}
                <div 
                    onClick={() => selectRoleClick("student")}
                    className="divContainer regRole roleStudent"
                    style={selectedRole === "student" ? selectedStyle : {}}
                >
                    <Image 
                        className="studentIcon" 
                        src={imagesIndex.studentIcon} 
                        alt="Иконка студента"
                        style={textStyle("student")} // Применяем стиль к иконке
                    />
                    <span 
                        className="studentText"
                        style={textStyle("student")} // Применяем стиль к тексту
                    >
                        Я студент, ординатор, аспирант
                    </span>
                </div>

                {/* Блок для врача */}
                <div 
                    onClick={() => selectRoleClick("teacher")}
                    className="divContainer regRole roleTeacher"
                    style={selectedRole === "teacher" ? selectedStyle : {}}
                >
                    <Image 
                        className="teacherIcon" 
                        src={imagesIndex.teacherIcon} 
                        alt="Иконка врача"
                        style={textStyle("teacher")} // Применяем стиль к иконке
                    />
                    <span 
                        className="teacherText"
                        style={textStyle("teacher")} // Применяем стиль к тексту
                    >
                        Я врач
                    </span> 
                    <span>ㅤ</span>
                </div>
            </div>

            <button onClick={nextStep} className="regNext" id="next">Далее</button>

        </div>
    )
}