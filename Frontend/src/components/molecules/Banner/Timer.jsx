import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    format: "AM",
    day: 0,
    date: "",
  });

  useEffect(() => {
    const updateClock = () => {
      let date = new Date();
      let day = date.getDay();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let timeFormat = hours >= 12 ? "PM" : "AM";

      hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = {
        hours: hours < 10 ? "0" + hours : hours.toString(),
        minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
        seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
        format: timeFormat,
        day,
        date: formattedDate,
      };
      setTime(formattedTime);
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="timer">
      <div className="display shadow-lg p-4 text-center">
        {/* Weekdays */}
        <div className="weekdays flex justify-center mb-3">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
            <span
              key={index}
              className={`${
                index === time.day ? "font-bold text-blue-500" : "text-gray-400"
              }`}
            >
              {day}
            </span>
          ))}
        </div>

        {/* Time Display */}
        <div className="timeDisplay font-bold">
          <div className="time">
            {time.hours}
            <span className="dot">:</span>
            {time.minutes}
            <span className="dot">:</span>
            {time.seconds}
          </div>
          <div className="format text-xl text-uppercase">{time.format}</div>
        </div>

        {/* Date Display */}
        <div className="date-display text-center font-bold text-red-600 text-3xl mt-4">
          {time.date}
        </div>
      </div>
    </section>
  );
}
