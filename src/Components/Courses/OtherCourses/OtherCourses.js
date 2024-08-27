import "./OtherCourses.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
function OtherCourses() {
  return (
    <div className="other__header">
      <h2>Other Courses</h2>
      <div className="search-container">
        <input type="search" placeholder="search for courses" />
        <HiMagnifyingGlass className="search__icon" />
      </div>
    </div>
  );
}

export default OtherCourses;
