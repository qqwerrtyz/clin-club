"use client"
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function FrequencyDiagram() {


    const chartRef  = useRef(null);
    const chartInstanceRef = useRef(null);
    useEffect(() => {
        const deviceWidth = window.innerWidth;

        if (!chartRef.current) return;
    
        const ctx = chartRef.current.getContext("2d");
    
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
    
        const data = {
            labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"], // Подписи для столбцов
            datasets: [
                {
                    label: "Прогресс решения задач", // Название для легенды
                    data: [3, 5, 1, 10, 3, 4, 10],
                    backgroundColor: [
                        "#92B7FF",
                        "#5EDCC3",
                        "#878ED2",
                        "#F27DC3",
                        "#92B7FF",
                        "#D7DCDB",
                        "#878ED2"
                    ],
                    borderWidth: 0,
                    // Адаптация под телефон
                    barThickness: deviceWidth < 576 ? 20 :
                                  deviceWidth < 1024 ? 25 : 40, // Ширина столбцов
                    borderRadius: 10, // Закругление углов
                }
            ]
        };
    
        const config = {
            type: "bar", // Меняем тип на столбчатую диаграмму
            data: data,
            options: { // Исправлено: было "optins"
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false // Убираем сетку для оси Y
                        },
                        ticks: {
                            stepSize: 20 // Шаг значений на оси Y
                        }
                    },
                    x: {
                        grid: {
                            display: false // Убираем сетку для оси X
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Скрываем легенду
                    }
                }
            }
        };
    
        chartInstanceRef.current = new Chart(ctx, config);
    
    }, [])

    return (
        <div className="frequencyDiagramWrapper">
            <canvas ref={chartRef} className="frequencyDiagram"></canvas>
        </div>
    )
}