import React from "react";
import Courses from "./Components/Courses/Courses";
import PaythonPage from "./Components/Courses/CoursesPage/PayhonPage";
import EditProfile from "./Components/EditProfile/EditProfile";
import ExamForm from "./Components/ExamForm/ExamForm";
import Exams from "./Components/Exams/Exams";
import Lessons from "./Components/Lessons/Lessons";
import Profile from "./Components/Profile/Profile";
import RegisterCourses from "./Components/Register/RegisterCourses/RegisterCourses";
import "./app.css";
import ExamsReview from "./Components/Exams/ExamsReview/ExamsReview";
import ExamResults from "./Components/Exams/ExamsResults/ExamResults";
import JobSearch from "./Components/Jobs/JobSearch";
import JobDetails from "./Components/JobDetails/JobDetails";
import JobApply from "./Components/JobApply/JobApply";
function App() {
  return (
    <>
      <RegisterCourses />
      <Lessons />
      <Profile />
      <EditProfile />
      <Courses />
      <PaythonPage />
      <Exams />
      <ExamForm />
      <ExamsReview />
      <ExamResults />
      <JobSearch />
      <JobDetails />
      <JobApply />
    </>
  );
}

export default App;
