import CoursesCard from "../CoursesCard/CoursesCard";
import './CoursesList.css'
const coursesData = [
  {
    name: "HTML Basics",
    lessons: 12,
    instructor: "Mohammed Nour",
    startDate: "Thursday, June 8th",
    level: 1,
    imageUrl: "../../../images/empty.jpg",
    id: 1,
  },
  {
    name: "Css Basics",
    lessons: 12,
    instructor: "Mohammed Nour",
    startDate: "Thursday, June 8th",
    level: 5,
    imageUrl: "../../../images/empty.jpg",
    id: 2,
  },
  {
    name: "JavaScript Basics",
    lessons: 60,
    instructor: "Sayed Osama",
    startDate: "Thursday, June 8th",
    level: 1,
    imageUrl: "../../../images/empty.jpg",
    id: 3,
  },
  {
    name: "Bootstrap Basics",
    lessons: 12,
    instructor: "Mohammed Nour",
    startDate: "Thursday, June 8th",
    level: 8,
    imageUrl: "../../../images/empty.jpg",
    id: 4,
  },
  {
    name: "React Basics",
    lessons: 50,
    instructor: " Ahmed Nour",
    startDate: "Thursday, June 8th",
    level: 3,
    imageUrl: "../../../images/empty.jpg",
    id: 5,
  },
];
function CoursesList() {
  return (
    <div className="course__list">
      {coursesData.map((course) => (
        <CoursesCard course={course} key={course.id} />
      ))}
    </div>
  );
}

export default CoursesList;
