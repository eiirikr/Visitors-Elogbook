import React, { useState, useEffect } from "react";
import moment from "moment";

export default function DigitalClock() {
    const [secondsDeg, setSecondsDeg] = useState(0);
    const [minutesDeg, setMinutesDeg] = useState(0);
    const [hoursDeg, setHoursDeg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        const now = moment();

        const secDeg = (now.seconds() / 60) * 360;
        const minDeg = (now.minutes() / 60) * 360;
        const hrDeg = ((now.hours() % 12) / 12) * 360;

        setSecondsDeg(secDeg);
        setMinutesDeg(minDeg);
        setHoursDeg(hrDeg);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="clock">
            <label style={{ "--i": 1 }}><span>1</span></label>
            <label style={{ "--i": 2 }}><span>2</span></label>
            <label style={{ "--i": 3 }}><span>3</span></label>
            <label style={{ "--i": 4 }}><span>4</span></label>
            <label style={{ "--i": 5 }}><span>5</span></label>
            <label style={{ "--i": 6 }}><span>6</span></label>
            <label style={{ "--i": 7 }}><span>7</span></label>
            <label style={{ "--i": 8 }}><span>8</span></label>
            <label style={{ "--i": 9 }}><span>9</span></label>
            <label style={{ "--i": 10 }}><span>10</span></label>
            <label style={{ "--i": 11 }}><span>11</span></label>
            <label style={{ "--i": 12 }}><span>12</span></label>

        <div className="indicator">
          <span
            className="hand hour"
            style={{ transform: `rotate(${hoursDeg}deg)` }}
          />
          <span
            className="hand minute"
            style={{ transform: `rotate(${minutesDeg}deg)` }}
          />
          <span
            className="hand second"
            style={{ transform: `rotate(${secondsDeg}deg)` }}
          />
        </div>
      </div>
    )
}