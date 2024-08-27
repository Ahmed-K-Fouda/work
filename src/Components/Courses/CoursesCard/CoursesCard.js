import "./CourseCard.css";
import img from "../../../images/empty.jpg";
import Button from "../../Button/Button";

function CoursesCard({ course }) {
  return (
    <div className="course__card">
      <div className="course__img">
        <img src={course?.imgUrl || img} alt="img" />
        <div className="img__info">
          <h3>{course?.name || "HTML Basics"}</h3>
          <p>{course?.lessons || 12} lessons</p>
          <p>
            <span className="highlight">Instructor:</span>{" "}
            {course?.instructor || "Mohammed Nour"}
          </p>
        </div>
      </div>
      <div className="course__date">
        {course?.startDate || "Thursday, June 8th"}
      </div>
      <div className="course__level">{course?.level || 1}</div>
      <div className="course__buttons">
        <Button>ENROLL</Button>
        <a href="#">View Details</a>
      </div>
    </div>
  );
}

export default CoursesCard;
