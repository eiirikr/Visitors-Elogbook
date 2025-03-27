import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    format: "AM",
    day: 0, // Default to Sunday
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

      // Convert to 12-hour format
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
        day, // Current day (0-6)
        date: formattedDate,
      };

      setTime(formattedTime); // Update the time state
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="timer">
      <div className="display p-4 text-center shadow-lg">
        {/* Weekdays */}
        <div className="weekdays">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
            (day, index) => (
              <span
                key={index}
                className={`${index === time.day ? "highlighted" : "default"}`}
              >
                {day}
              </span>
            )
          )}
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
          <div className="format text-uppercase text-xl">{time.format}</div>
        </div>

        {/* Date Display */}
        <div className="date-display text-red-600 mt-4 text-center text-3xl font-bold">
          {time.date}
        </div>
      </div>
    </section>
  );
}
