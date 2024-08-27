import Button from "../Button/Button";
import CourseItems from "../Register/CoursesItems/CourseItems";
import RegisterCourseBox from "../Register/RegisterCoursesBox/RegisterCourseBox";
import Welcome from "../Register/Welcome/Welcome";
import "./Lessons.css";
import UpcomingCourses from "./UpcomingCourses/UpcomingCourses";
function Lessons() {
  return (
    <div className="lessons__container">
      <div className="overlay"></div>
      <div className="lessons">
        <Welcome />
        <RegisterCourseBox />

        <div className="check">
          <span>&#10003;</span>
          <p>All clear, you don't have any exams today.</p>
        </div>

        <div className="course__level">
          <div className="course__level__right">
            <div className="course__level__right">
              <h3>Registered Courses</h3>
              <CourseItems
                courseName="Introduction to React JS"
                level="1"
                showInstructor={false}
                showStudents={true}
                studentNum={20}
              />
              <CourseItems
                courseName="Introduction to JS"
                level="2"
                showInstructor={false}
                showStudents={true}
                studentNum={20}
              />
            </div>
          </div>
          <div className="course__level__left">
            <div className="upcoming">
              <h3>Upcoming Exams</h3>
              <Button>Create new</Button>
            </div>
            <CourseItems
              courseName="Introduction to React JS"
              instructorName="Name"
              showInstructor={true}
              level="3 Exam"
              isExam={true}
              examTime="12:30 PM"
            />
          </div>
        </div>

        <div className="upcoming__courses">
          <UpcomingCourses
            headers="Paython for beginners"
            lessonsNum="12"
            level="1"
          />
          <UpcomingCourses
            headers="Paython for beginners"
            lessonsNum="12"
            level="1"
          />
        </div>
      </div>
    </div>
  );
}

export default Lessons;
