import Button from "../../Button/Button";
import emptyImage from "../../../../src/images/empty.jpg";
import "./UpcomingCourses.css";
import { HiCalendarDays, HiDocumentText } from "react-icons/hi2";
function UpcomingCourses({ headers, level, lessonsNum }) {
  const date = new Date().toDateString();
  return (
    <div className="exams__parent">
      <div className="exams__img">
        <img src={emptyImage} alt="lesson img" />
        <div className="over__img">
          <p>Level.{level}</p>
        </div>
      </div>
      <div className="exams__info">
        <h5>{headers}</h5>
        <p>
          {
            <HiCalendarDays
              style={{ color: "var(--main-color)", margin: "0 5px" }}
            />
          }
          {date}
        </p>
        <p>
          {
            <HiDocumentText
              style={{ color: "var(--main-color)", margin: "0 5px" }}
            />
          }
          {lessonsNum} lessons
        </p>
        <Button>View details</Button>
      </div>
    </div>
  );
}

export default UpcomingCourses;
