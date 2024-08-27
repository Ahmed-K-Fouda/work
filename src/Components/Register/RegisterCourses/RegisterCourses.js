import "./RegisterCourses.css";
import "../../../app.css";
import Button from "../../Button/Button";
import RegisterCourseBox from "../RegisterCoursesBox/RegisterCourseBox";
import RegisterRange from "../RegisterRange";
import CourseItems from "../CoursesItems/CourseItems";
import CircularProgress from "../CircularProgress/CircularProgress";
import Welcome from "../Welcome/Welcome";

function RegisterCourses() {
  const date = new Date().toDateString();

  return (
    <div className="register__courses__container">
      <div className="overlay"></div>
      <div className="register">
        <Welcome />
        <div className="register__courses">
          <RegisterCourseBox />
        </div>

        <div className="level">
          <RegisterRange />
        </div>

        <div className="check">
          <span>&#10003;</span>
          <p>All clear, you don't have any exams today.</p>
        </div>

        <div className="course__level">
          <div className="course__level__right">
            <h3>Registered Courses</h3>
            <CourseItems
              courseName="Introduction to React JS"
              instructorName="Name"
              level="1"
              showInstructor={true}
            />
            <CourseItems
              courseName="Introduction to JS"
              instructorName="Name"
              level="2"
              showInstructor={true}
            />
          </div>
          <div className="course__level__left">
            <h3>Upcoming Exams</h3>
            <CourseItems
              courseName="Introduction to React JS"
              instructorName="Name"
              showInstructor={true}
              level="3"
              isExam={true}
              examTime="12:30 PM"
            />
          </div>
        </div>

        <div className="rating">
          <h1>
            Here's how you have been doing for the <span>last month</span>{" "}
          </h1>
        </div>

        <div className="progress">
          <CircularProgress
            percentage={91}
            title="Introduction to web"
            level="LEV. 1"
            hours="27/30 Hours"
          />
          <CircularProgress
            percentage={80}
            title="Introduction to Data Analysis"
            level="LEV. 1"
            hours="27/30 Hours"
          />
          <CircularProgress
            percentage={55}
            title="Introduction to React js"
            level="LEV. 1"
            hours="27/30 Hours"
          />
          <CircularProgress
            percentage={100}
            title="Introduction to js"
            level="LEV. 1"
            hours="27/30 Hours"
          />
        </div>

        <div className="earn">
          <h1>Earned Certificates</h1>
        </div>
        <div className="certificate">
          <div className="intro">
            <h2>Introduction to React js</h2>
            <Button>Download</Button>
          </div>
          <div className="details">
            <p>
              <span>instructor: </span>name
            </p>
            <p>
              <span>Data Acquired: </span>
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCourses;
