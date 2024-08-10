import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  // let temp= 123456
  const [second, setSecond] = useState(0);
  const [min, setMin] = useState(2);
  const [hour, setHour] = useState(1);
  const [isRunning,setIsRunning]=useState(false)

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        }
        if (second === 0) {
          if (min === 0) {
           
            if(hour===0){
                clearInterval(interval);
            }else{
               setHour(hour - 1);
               setMin(59);
              setSecond(59);
            }
           
          } else {
            setMin(min - 1);
            setSecond(59);
          }
        }
      }, 1000);
      
    }
        return () => clearInterval(interval);
  }, [isRunning,second]);

  return (
    <>
      <div className="container">
        <div className="timer">
          <div className="timer-header">
            <h3>Countdown timer</h3>
          </div>
          <div className="timer-body"> {`${hour}H : ${min}M : ${second}S`}</div>
          <div className="timer-footer">
            <button onClick={()=>setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
