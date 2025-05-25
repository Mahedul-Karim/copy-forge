import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = ({ date, setDate }) => {
  const currentDate = new Date();

  const selectedDate = new Date(date);

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const firstDayofCurrentMonth = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const lastDayofCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDay();

  const lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

  const lastDateofCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  console.log("I AM CALENDER....");

  const dates = useMemo(() => {
    const result = [];
    for (let i = firstDayofCurrentMonth; i > 0; i--) {
      result.push({ date: lastDateofLastMonth - i + 1, isActive: false });
    }

    for (let i = 1; i <= lastDateofCurrentMonth; i++) {
      result.push({ date: i, isActive: true });
    }
    for (let i = lastDayofCurrentMonth; i < 6; i++) {
      result.push({ date: i - lastDayofCurrentMonth + 1, isActive: false });
    }

    return result;
  }, [currentYear, currentMonth]);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-transparent">
      <div className="flex items-center justify-between mt-4">
        <Button
          variant="outline"
          onClick={prevMonth}
          className="hover:bg-muted"
          disabled={
            currentYear === currentDate.getFullYear() &&
            currentMonth === currentDate.getMonth()
          }
        >
          <ChevronLeft className="text-xs xs:text-sm" />
        </Button>
        <p className="text-text-primary text-sm xs:text-base font-medium">
          {MONTHS.at(currentMonth)}, {currentYear}
        </p>
        <Button
          variant="outline"
          onClick={nextMonth}
          className="hover:bg-muted"
        >
          <ChevronRight className="text-xs xs:text-sm" />
        </Button>
      </div>
      <div className="grid grid-cols-7 mt-5 justify-items-center">
        {DAYS.map((day, i) => (
          <div key={i} className="font-normal text-xs xs:text-sm">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-4 justify-items-center">
        {dates.map((date, i) => {
          const isDisabled =
            !date.isActive ||
            (currentDate.getMonth() === currentMonth &&
              date.date < currentDate.getDate());

          const isToday =
            date.isActive &&
            currentYear === currentDate.getFullYear() &&
            currentMonth === currentDate.getMonth() &&
            date.date === currentDate.getDate();

          return (
            <div key={i}>
              <button
                type="button"
                className={`mb-4 disabled:text-gray-400 disabled:hover:bg-transparent hover:bg-primary hover:text-[#333] dark:hover:bg-hover dark:hover:text-[#333] hover:transition-all hover:duration-300 w-8 h-8 rounded-md text-xs xs:text-sm font-medium cursor-pointer disabled:cursor-none ${
                  date.date === +selectedDate.getDate() &&
                  !isDisabled &&
                  selectedDate.getMonth() === currentMonth &&
                  "bg-primary text-[#333] dark:bg-hover dark:text-[#333]"
                } ${isToday && "bg-muted"}`}
                disabled={isDisabled}
                onClick={() => {
                  const selectDate = +new Date(
                    currentYear,
                    currentMonth,
                    date.date
                  );

                  setDate(selectDate);
                }}
              >
                {date.date}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
