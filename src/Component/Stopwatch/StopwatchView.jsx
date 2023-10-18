import React, { useEffect, useRef, useState } from "react";
const toCenterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  border: "1px dashed red",
};


const StopwatchView = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const OnstopWatchStartandStop = (e) => {
    setIsRunning(!isRunning);
  };
  const OnstopWatchReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  return (
    <>
      <div
        className="container"
        style={{
          border: "1px dashed red",
          width: "300px",
          height: "200px",
          display: "flex",
          margin: "0px auto",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div className="content-div">
          <h3>Stopwatch</h3>
          <h4>{`${hours} : ${minutes} : ${seconds} : ${milliseconds} `}</h4>
          <button onClick={OnstopWatchReset}>Reset</button>{" "}
          <button onClick={OnstopWatchStartandStop}>
            {isRunning ? "Stop" : "Start"}
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default StopwatchView;
