"use client"

import { useEffect, useRef, useState } from "react"
import { Chart } from "chart.js/auto";

export default function AnalyticsTaskForWeekDiagram() {
    const [dataForWeek, setDataForWeek] = useState({
        right: 45,
        notRight: 34
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
                        data: [dataForWeek.right, dataForWeek.notRight],
                        backgroundColor: [
                            "#92B7FF",
                            "#F27DC3"
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
    
        //    Потом добавить обработку в виде data?.right data?.notRight
        }, []); // 13. Пустой массив зависимостей - монтирование 1 раз
    
    
    return (
        <div className="analyticsTaskDiagramsWrapper">
            <canvas ref={chartRef} className="analyticsTaskDiagrams" ></canvas>

            <div className="analyticsTaskMetricsWrapper">
                <div className="analyticsTaskMetricWrapper">
                    <span className="analyticsTaskMetricResult" style={{color: "#92B7FF"}}>{dataForWeek.right}%</span>
                    <span className="analyticsTaskMetricName">Решено правильно</span>
                </div>

                <div className="analyticsTaskMetricsSeparateLine"></div>

                <div className="analyticsTaskMetricWrapper">
                    <span className="analyticsTaskMetricResult" style={{color: "#F27DC3"}}>{dataForWeek.notRight}%</span>
                    <span className="analyticsTaskMetricName">Решено не правильно</span>
                </div>
            </div>
        </div>
    )
}