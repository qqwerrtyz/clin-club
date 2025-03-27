"use client";
import { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";

import goLeft from "../../../../public/imgs/portal/main/goLeft.png"
import goRight from "../../../../public/imgs/portal/main/goRight.png"

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDays, setActiveDays] = useState([1, 5, 9]);
  const today = new Date();

  // Пример запроса на получение активных дней при загрузке компонента или смене месяца


  // Получаем все дни текущего месяца
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Получаем дни предыдущего месяца для заполнения сетки
  const startWeekday = monthStart.getDay();
  const prevMonthDays = Array.from({ length: startWeekday === 0 ? 6 : startWeekday - 1 })
    .map((_, i) => subMonths(monthStart, 1).getDate() - i)
    .reverse();

  // Получаем дни следующего месяца для заполнения сетки
  const endWeekday = monthEnd.getDay();
  const nextMonthDays = Array.from({ length: endWeekday === 0 ? 0 : 7 - endWeekday })
    .map((_, i) => i + 1);

  // Форматируем заголовок
  const header = format(currentDate, "LLLL yyyy", { locale: ru });

  return (
    <div className="divContainer calendar">
      {/* Навигация по месяцам */}

        <div className="calendarHeader">
            <div className="calendarHeadlineWrapper">
                <h2 className="calendarHeadline">{header}</h2>
            </div>
            <div className="calendarButtonsWrapper">
                <button onClick={() => setCurrentDate(subMonths(currentDate, 1))} className="navButton">
                    <Image src={goRight}/>
                </button>
                <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="navButton">
                    <Image src={goLeft}/>
                </button>
            </div>
        </div>

      <div className="calendarGrid">
        {/* Дни недели */}
        <div className="dayName">Пн</div>
        <div className="dayName">Вт</div>
        <div className="dayName">Ср</div>
        <div className="dayName">Чт</div>
        <div className="dayName">Пт</div>
        <div className="dayName">Сб</div>
        <div className="dayName">Вс</div>

        {/* Дни предыдущего месяца */}
        {prevMonthDays.map((day, i) => (
          <div key={`prev-${i}`} className="day otherMonth"></div>
        ))}

        {/* Дни текущего месяца */}
        {daysInMonth.map((date) => {
          const day = date.getDate();
          const isActive = activeDays.includes(day); // Проверка на активный день

          return (
            <div
              key={date.toISOString()}
              className={`day ${
                isSameDay(date, today) ? "today" : ""
              } ${
                !isSameMonth(date, currentDate) ? "otherMonth" : ""
              }`}
            >
              {format(date, "d")}
              {isActive && <div className="blueBg activeDot"></div>} {/* Красная точка */}
            </div>
          );
        })}

        {/* Дни следующего месяца */}
        {nextMonthDays.map((day, i) => (
          <div key={`next-${i}`} className="day otherMonth"></div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
