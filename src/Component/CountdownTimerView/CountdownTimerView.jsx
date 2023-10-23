import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const CountdownTimerView = () => {
  const [hour,setHour]=useState(0)
  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState(0);
  const [isTimerStart,setIsTimerStart]=useState(false)
  const [isTimesUp,setIsTimesUp]=useState(false)

  // const handleOnchange=(e)=>{
  //     if(e.target.name==="hour"){
  //        if (e.target.value >= 0) {
  //          setHour(e.target.value);
  //        }
  //     }else if (e.target.name === "minute") {
  //        if (e.target.value >= 0 && e.target.value <= 60) {
  //          setMinute(e.target.value);
  //        }
  //     } else if (e.target.name === "second") {
  //       if(e.target.value>=0 && e.target.value<=60){
  //         setSecond(e.target.value)
  //       }
  //     }
  // }
  useEffect(() => {
    let interval;
    if (isTimerStart) {
      interval = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        }
        if (second === 0) {
          if (minute === 0) {
            clearInterval(interval);
            setIsTimesUp(true);
          } else {
            setMinute(minute - 1);
            setSecond(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [second, isTimerStart]);
  return (
    <>
      <div className="container">
        <h3>Countdown timer</h3>
        <div>
          {/* <input
            type="number"
            name="hour"
            min={0}
            value={hour}
            onChange={handleOnchange}
          />{" "}
          Hours{" "} */}
          {/* <input
            type="number"
            name="minute"
            min={0}
            max={60}
            value={minute}
            onChange={handleOnchange}
          />{" "}
          Minutes{" "}
          <input
            type="number"
            name="second"
            min={0}
            max={60}
            value={second}
            onChange={handleOnchange}
          />{" "} */}
          Second{" "}
          <button onClick={() => setIsTimerStart(!isTimerStart)}>
            {isTimerStart ? (isTimesUp ? "Start" : "Pause") : "Start"}
          </button>
        </div>

        <h2> {`${hour} Hr : ${minute} Min : ${second} sec `}</h2>
      </div>
    </>
  );
}

export default CountdownTimerView;