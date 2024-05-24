import React, { useEffect, useState } from "react";
const progressContainerStyle = {
  width: "100%",
  height: "20px",
  border: "1px solid grey",
  borderRadius: "10px",
  position: "relative",
};
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 1000);
    return ()=>clearInterval(interval)
  }, [progress]);
  return (
    <div style={{ width: "300px", height: "200px" }}>
      <div className="progress-bar" style={progressContainerStyle}>
        <div
          className="progress"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: " 0.2s linear",
            borderRadius: "10px",
          }}
        >
          <span style={{ textAlign: "center", color: "white" }}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
