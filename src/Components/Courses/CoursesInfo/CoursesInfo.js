import Button from "../../Button/Button";
import { HiCalendarDays, HiDocument, HiArrowRight } from "react-icons/hi2";
import img from "../../../images/empty.jpg";
import "./CoursesInfo.css";
const date = new Date().toDateString();
function CoursesInfo({ title, instructorName, lessonsNum }) {
  return (
    <div className="new__courses__info">
      <div className="course__img">
        <img src={img} alt="img" />
        <div className="over__img">
          <p>{title}</p>
          <p>
            <span>instructor:</span> {instructorName}
          </p>
        </div>
      </div>
      <p>
        <HiCalendarDays
          style={{ color: "var(--main-color)", margin: "0px 6px" }}
        />{" "}
        {date}
      </p>
      <p>
        <HiDocument style={{ color: "var(--main-color)", margin: "0px 6px" }} />
        {lessonsNum} lessons
      </p>
      <Button>Enroll</Button>
      <div className="link">
        <a href="#">
          View details <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}

export default CoursesInfo;
