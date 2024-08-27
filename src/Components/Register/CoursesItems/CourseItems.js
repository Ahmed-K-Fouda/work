import Button from "../../Button/Button";
import "./CoursesItems.css";
import { HiUser, HiClock } from "react-icons/hi2";
function CourseItems({
  courseName,
  instructorName,
  level,
  isExam,
  examTime,
  showStudents = false,
  studentNum = 0,
  showInstructor = true,
}) {
  return (
    <div className="box">
      <p>{courseName}</p>
      {showInstructor && (
        <small>
          <span className="instructor">Instructor: </span> {instructorName}
        </small>
      )}
      <div className="course__details">
        <span>Lev.{level}</span>
        {showStudents ? (
          <span className="students">
            {<HiUser style={{ color: "var(--main-color)" }} />}
            {studentNum} students
          </span>
        ) : (
          ""
        )}
        {isExam ? (
          <span className="time">
            <HiClock />
            {examTime}
          </span>
        ) : (
          <Button>View Details</Button>
        )}
      </div>
    </div>
  );
}

export default CourseItems;
