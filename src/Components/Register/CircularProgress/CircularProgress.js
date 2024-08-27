import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../../app.css";
import "./CircularProgress.css";
function CircularProgress({
  percentage,
  title,
  level,
  hours,
  value,
  maxValue,
}) {
  const percentageValue = (value / maxValue) * 100;
  return (
    <div style={{ width: 100, height: 100, margin: "10px auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: "var(--main-color)",
          textColor: "#Fff",
          trailColor: "#d6d6d6",
          textSize: "20px",
          strokeLinecap: "round",
        })}
      />
      <div style={{ marginTop: "10px" }} className="info">
        <p>{title}</p>
        <p>{level}</p>
        <p>{hours}</p>
      </div>
    </div>
  );
}

export default CircularProgress;
