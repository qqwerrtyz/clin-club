"use client"

import { useEffect, useRef, useState } from "react"
import { Chart } from "chart.js/auto";

export default function Diagram() {
    const [dataDone, setDataDone] = useState({
        done: 80,
        lose: 34
    })

    const chartRef  = useRef(null);
    const chartInstanceRef = useRef(null);
    useEffect(() => {
        // 6. Проверяем существование элемента
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext("2d");

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const data = {
            // Данные по X (либо в заголовке)
            // labels: ["Тут", "Указываются"],
            datasets: [
                {
                    // label: "Название диаграммы",
                    // Данные по Y
                    data: [dataDone.done, dataDone.lose],
                    backgroundColor: [
                        "#F27DC3",
                        "#5EDCC3"
                    ],
                    borderWidth: 0,

                    // Радиус дырки посередине
                    cutout: 0
                },

                
            ]

        }

        const config = {
            type: "doughnut",
            data: data,
            optins: {
                responsive: false,
                maintainAspectRatio: false,
                animation: false // Убираем анимацию для мгновенного обновления
            }
        }

        chartInstanceRef.current = new Chart(ctx, config);

    //    Потом добавить обработку в виде data?.done data?.lose
    }, []); // 13. Пустой массив зависимостей - монтирование 1 раз

    
    return (
        <div className="analyticsTeacherDiagramsWrapper">
            <canvas ref={chartRef} className="analyticsTeacherDiagrams" ></canvas>

            <div className="analyticsTeacherMetricsWrapper">
                <div className="analyticsTeacherMetricWrapper">
                    <span className="analyticsTeacherMetricResult" style={{color: "#92B7FF"}}>{dataDone.done}%</span>
                    <span className="analyticsTeacherMetricName">Решено правильно</span>
                </div>

                {/* <div className="analyticsTeacherMetricsSeparateLine"></div> */}

                <div className="analyticsTeacherMetricWrapper">
                    <span className="analyticsTeacherMetricResult" style={{color: "#F27DC3"}}>{dataDone.lose}%</span>
                    <span className="analyticsTeacherMetricName">Решено не правильно</span>
                </div>
            </div>
        </div>
    )
}