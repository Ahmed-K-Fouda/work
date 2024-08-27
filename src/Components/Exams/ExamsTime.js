import React from "react";
import Button from "../Button/Button";
import { HiCalendar } from "react-icons/hi2";
import { HiClock } from "react-icons/hi2";

function ExamsTime({ examType, date, title, instructorName, level }) {
  return (
    <>
      {/* <div className="exams__title">
        <h1>{examType === "upcoming" ? "Upcoming Exams" : "Previous Exams"}</h1>
      </div> */}

      <div className="upcoming__exams">
        <div className="exams__time">
          <p>
            <HiCalendar />
            {date}
          </p>
          <p>
            <HiClock />
            12:30 Pm
          </p>
        </div>

        <div className="exams__subject">
          <p>{title}</p>
          <sm>
            <span>Instructor: </span>
            {instructorName}
          </sm>
        </div>

        <div className="exams__level">
          <h4>{level}</h4>
        </div>

        {examType === "upcoming" ? (
          <div className="exams__degree">
            <p>N/A</p>
          </div>
        ) : (
          ""
        )}

        {examType === "upcoming" ? (
          <div className="join__btn">
            <Button>Join Exam</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ExamsTime;
