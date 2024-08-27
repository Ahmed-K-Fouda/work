import "./Exams.css";
import ExamsTime from "./ExamsTime";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

function Exams() {
  const date = new Date().toDateString();
  return (
    <div className="exams__container">
      <div className="overlay"></div>
      <div className="exams">
        <div className="exams__top__page">
          <p>Exams</p>
          <p>{date}</p>
        </div>

        <div className="exams__title">
          <h1>Upcoming Exams</h1>
        </div>

        <ExamsTime
          examType="upcoming"
          title="Introduction to React Js"
          date="Saturday, Jun 5th"
          level="1"
          instructorName="Ahmed Ali"
        />
        <div className="exams__title">
          <h1>previous Exams</h1>
        </div>
        <ExamsTime
          examType="previous"
          title="Introduction to Javascript"
          date="Sunday, Jun 6th"
          level="2"
          instructorName="Samar Ahmed"
        />

        <ExamsTime
          title="Introduction to Paython"
          date="Monday, Jun 7th"
          level="3"
          instructorName="Sayed Omar"
          examType="previous"
        />

        <ExamsTime
          title="Introduction to HTml"
          date="Tuesday, Jun 8th"
          level="5"
          instructorName="Eslam Omar"
          examType="previous"
        />
      </div>

      <div className="buttons">
        <div className="direction">
          <HiArrowLeft />
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <HiArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Exams;
