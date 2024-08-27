import "./Courses.css";
import CoursesCard from "./CoursesCard/CoursesCard";
import CoursesInfo from "./CoursesInfo/CoursesInfo";
import CoursesList from "./CoursesList/CoursesList";
import OtherCourses from "./OtherCourses/OtherCourses";
const date = new Date().toDateString();

function Courses() {
  return (
    <div className="courses__container">
      <div className="overlay"></div>
      <div className="courses">
        <div className="courses__top__page">
          <p>Courses</p>
          <small>{date}</small>
        </div>

        <div className="title">
          <h3>New Courses</h3>
        </div>

        <div className="new__courses">
          <CoursesInfo
            title="payton for beginners"
            lessonsNum={12}
            instructorName="sayed osama"
          />
          <CoursesInfo
            title="oop for beginners"
            lessonsNum={10}
            instructorName="sayed osama"
          />
          <CoursesInfo
            title="Java for beginners"
            lessonsNum={15}
            instructorName="sayed osama"
          />
          <CoursesInfo
            title="React for beginners"
            lessonsNum={5}
            instructorName="sayed osama"
          />
        </div>

        <OtherCourses />
        <CoursesList />
      </div>
    </div>
  );
}

export default Courses;
