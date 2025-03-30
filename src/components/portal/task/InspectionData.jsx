"use client"

import forwardDown from "../../../../public/imgs/portal/task/forwardDown.png"
import forwardUp from "../../../../public/imgs/portal/task/forwardUp.png"
import Image from "next/image"

export default function InspectionData() {

    function openBody (event) {
        const target = event.target;
        const body = target.closest(".taskInspectionDataItemHeader")
        const sibling = body.nextElementSibling;
        if (sibling.classList.contains("taskBodyDisplay")) {
            sibling.classList.remove("taskBodyDisplay");
            body.children[1].classList.remove("taskForwardDisplay")
            body.children[2].classList.add("taskForwardDisplay")
        } else {
            sibling.classList.add("taskBodyDisplay");
            body.children[1].classList.add("taskForwardDisplay")
            body.children[2].classList.remove("taskForwardDisplay")
        }
        
    }

    const inspectionData = [
        {
            name: "Результаты лабораторных и инструментальных исследований",
            descriptionLists: [
                "Общий анализ крови: Hb – 110 г/л, Эритроциты – 3.5 млн/мкл, Лейкоциты – 6.2 тыс./мкл.",
                "Биохимия: общий белок – 64 г/л, АЛТ – 22 Ед/л, АСТ – 18 Ед/л.",
                "Гастроскопия: на задней стенке желудка выявлена язва диаметром 1.5 см с признаками заживления. Взята биопсия",
                "Тест на Helicobacter pylori: положительный",
                "УЗИ органов брюшной полости: без особенностей"
            ] 
        },

        {
            name: "Данные физикального осмотра",
            descriptionLists: [
                "Общий осмотр: кожа бледная, тургор снижен",
                "Живот мягкий, болезненность в эпигастрии при пальпации",
                "Лимфатические узлы не увеличены",
            ] 
        },

        {
            name: "УЗИ",
            descriptionLists: [
                "Общий осмотр: кожа бледная, тургор снижен",
                "Живот мягкий, болезненность в эпигастрии при пальпации",
                "Лимфатические узлы не увеличены",
            ] 
        },

       

       

        {
            name: "Рентген",
            descriptionLists: [
                "Общий осмотр: кожа бледная, тургор снижен",
                "Живот мягкий, болезненность в эпигастрии при пальпации",
                "Лимфатические узлы не увеличены",
            ] 
        },

        
    ]

    return (
        <div className="taskInspectionDataWrapper">
            {
                inspectionData.map((item, index) => {
                    return (
                        <div className="taskInspectionDataItem">  
                            <div onClick={openBody} className="taskInspectionDataItemHeader">
                                <span className="taskInspectionDataHeadline">{item.name}</span>
                                <Image src={forwardDown} className="taskForward taskForwardDisplay"/>
                                <Image src={forwardUp} className="taskForward"/>
                            </div>

                            <div className={`taskBodyDisplay divContainer taskInspectionDataItemBody`}>
                                {
                                    item.descriptionLists.map((text, indexText) => {
                                        return (
                                            <span className="taskInspectionDataItemBodyData">- {text}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}