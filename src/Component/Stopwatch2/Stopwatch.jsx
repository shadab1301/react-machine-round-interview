import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [isStart,setIsStart]=useState(false)
    const [time,setTime]=useState(0)
    
    useEffect(() => {
      let interval;
      if (isStart) {
        interval = setInterval(() => {
          setTime(time + 10);
        }, 10);
      }
      return () => clearInterval(interval);
    }, [isStart, time]);

    const handleStartStop=()=>{
        setIsStart(!isStart)
    }
    const OnstopWatchReset=()=>{
        setIsStart(false);
        setTime(0)
    }

    const { milliseconds, second, minutes, hour } = timeCalculation(time);
  return (
    <>
      <div className="container">
        <div className="stopwatch" style={{ width: "400px", height: "300px" }}>
          <div
            className="time-container"
            style={{ display: "flex", gap: "20px" }}
          >
            <div className="hour">
              Hour : {hour.toString().padStart(2, "0")}
            </div>
            <div className="minute">
              Minute: {minutes.toString().padStart(2, "0")}
            </div>
            <div className="seconds">
              Second: {second.toString().padStart(2, "0")}
            </div>
            <div className="milliseconds">
              ms: {milliseconds.toString().padStart(2, "0")}
            </div>
          </div>
          <div
            className="action-container"
            style={{ display: "flex", gap: "10px" }}
          >
            <button onClick={handleStartStop}>
              {isStart ? "Stop" : "Start"}
            </button>
            <button onClick={OnstopWatchReset}>Reset</button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
const timeCalculation=(time)=>{
    const milliseconds=Math.floor(time%1000/10)
    const second=Math.floor(time/1000%60)
    const minutes=Math.floor(time/60000%60)
    const hour = Math.floor(time/3600000%24);

    return {
      milliseconds,
      second,
      minutes,
      hour,
    };
}
export default Stopwatch