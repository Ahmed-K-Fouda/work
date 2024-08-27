import React, { useState } from "react";
import "./CoursesPage.css";
import img from "../../../images/empty.jpg";
import {
  HiDocumentText,
  HiOutlineSwatch,
  HiOutlineUser,
  HiLanguage,
  HiClock,
  HiCalendar,
} from "react-icons/hi2";
import Button from "../../Button/Button";

function PaythonPage() {
  const date = new Date().toDateString();

  const [openLesson, setOpenLesson] = useState({
    intro: false,
    functions: false,
    arrays: false,
  });

  const toggleLesson = (lesson) => {
    setOpenLesson((prev) => ({
      ...prev,
      [lesson]: !prev[lesson],
    }));
  };

  return (
    <div className="payhon__page__container">
      <div className="overlay"></div>
      <div className="paython__page">
        <div className="left__page">
          <div className="left__header">
            <p>TECH</p>
            <h1>Python Programming Language</h1>
            <p>
              <span>Instructor:</span> Mohamed Ali
            </p>
          </div>

          <div className="left__img">
            <img src={img} alt="img" />
          </div>

          <div className="left__intro">
            <h4>Introduction</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              explicabo. Optio voluptatem amet esse ex sed maxime vel
              consectetur soluta repellat voluptas molestias inventore,
              necessitatibus impedit numquam eum excepturi maiores tempore error
              dolore non provident.
            </p>
          </div>

          <div className="left__lesson">
            <h3>Lesson</h3>

            <p onClick={() => toggleLesson("intro")}>
              <div className="left__row">
                {" "}
                Introduction to Python{" "}
                <span>{openLesson.intro ? "-" : "+"}</span>
              </div>
              <span
                className={`lesson__details ${
                  openLesson.intro ? "show" : "hide"
                }`}
              >
                Python is a programming language that lets you work quickly and
                integrate systems more effectively.
              </span>
            </p>

            <p onClick={() => toggleLesson("functions")}>
              <div className="left__row">
                {" "}
                Functions <span>{openLesson.functions ? "-" : "+"}</span>
              </div>
              <span
                className={`lesson__details ${
                  openLesson.functions ? "show" : "hide"
                }`}
              >
                Functions in Python are defined using the def keyword. They can
                have parameters and return values.
              </span>
            </p>

            <p onClick={() => toggleLesson("arrays")}>
              <div className="left__row">
                {" "}
                Arrays <span>{openLesson.arrays ? "-" : "+"}</span>
              </div>
              <span
                className={`lesson__details ${
                  openLesson.arrays ? "show" : "hide"
                }`}
              >
                Arrays in Python are used to store multiple values in one single
                variable.
              </span>
            </p>
          </div>
        </div>

        <div className="right__page">
          <div className="lesson__level">
            <div className="lesson">
              <HiDocumentText style={{ color: "var(--main-color)" }} />
              <div className="lesson__num">
                <p>Lessons</p>
                <sm>12</sm>
              </div>
            </div>
            <div className="level__subj">
              <HiOutlineSwatch style={{ color: "var(--main-color)" }} />
              <div className="lesson__num">
                <p>Level</p>
                <sm>Beginners</sm>
              </div>
            </div>
          </div>

          <div className="lesson__info">
            <div className="student">
              <HiOutlineUser />{" "}
              <p>
                Students: <span>20</span>
              </p>
            </div>
            <div className="language">
              <HiLanguage />{" "}
              <p>
                Language: <span>Arabic</span>
              </p>
            </div>
            <div className="duration">
              <HiClock />{" "}
              <p>
                Duration: <span>13 hours</span>
              </p>
            </div>
            <div className="start__date">
              <HiCalendar />{" "}
              <p>
                Start Date: <span>{date}</span>
              </p>
            </div>
            <div className="cert">
              <HiDocumentText />{" "}
              <p>
                Certificate: <span>Upon Completion:</span>
              </p>
            </div>
            <div className="btn">
              <Button>Enroll</Button>
            </div>
          </div>

          <div className="right__bottom">
            <div className="assessment">
              <p>assessment</p>
              <small>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, explicabo. Optio voluptatem amet esse ex sed maxime
                vel.
              </small>
            </div>

            <div className="requirement">
              <p>requirement</p>
              <small>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, explicabo. Optio voluptatem amet esse ex sed maxime
                vel.
              </small>
            </div>

            <div className="materials">
              <p>Materials</p>
              <small>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, explicabo. Optio voluptatem amet esse ex sed maxime
                vel.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaythonPage;
