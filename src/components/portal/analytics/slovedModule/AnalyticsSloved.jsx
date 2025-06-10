"use client"

import { useContext, useEffect, useRef } from "react"
import { Chart } from "chart.js/auto";
import { DataAnalitycsContext } from "./AnalyticsSlovedModule";

export default function AnalyticsSloved() {
    const {slovedData} = useContext(DataAnalitycsContext);
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
                        data: [slovedData.slovedValue, slovedData.notSlovedValue],
                        backgroundColor: [
                            "#5EDCC3",
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
    
           
        }, [slovedData?.slovedValue, slovedData?.notSlovedValue]); // 13. Пустой массив зависимостей - монтирование 1 раз
    
    
    return (
        <div className="analyticsDiagramsWrapper">
            <canvas ref={chartRef} className="analyticsDiagrams" ></canvas>

            <div className="analyticsMetricsWrapper">
                <div className="analyticsMetricWrapper">
                    <span className="analyticsMetricResult" style={{color: "#5EDCC3"}}>{slovedData?.slovedValue}</span>
                    <span className="analyticsMetricName">Решено</span>
                </div>

                <div className="analyticsMetricsSeparateLine"></div>

                <div className="analyticsMetricWrapper">
                    <span className="analyticsMetricResult" style={{color: "#F27DC3"}}>{slovedData?.notSlovedValue}</span>
                    <span className="analyticsMetricName">Не решено</span>
                </div>
            </div>
        </div>
    )
}