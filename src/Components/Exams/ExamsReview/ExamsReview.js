import React from "react";
import "./ExamsReview.css";
import img from "../../../images/code.PNG";
import ExamReviewHeader from "./ExamReviewHeader";
import ExamTimeLine from "./ExamTimeLine";
function ExamsReview() {
  return (
    <div className="exam__review__container">
      <div className="overlay"></div>
      <div className="exam__review">
        <div className="top__page">
          <p>Online Exam</p>
          <p>6th jun 2024</p>
        </div>

        <ExamReviewHeader />

        <ExamTimeLine />

        <div className="question">
          <p>Question 1</p>
          <h4>Choose the right option out of the following:</h4>
          <div className="question__option">
            <p>A :</p>
            <p>B :</p>
            <p>C :</p>
          </div>
          <div className="question__degree">
            <p>2 marks</p>
          </div>
        </div>

        <div className="question">
          <p>Question 2</p>
          <h4>What the type of function used in this example:</h4>

          <div className="question__img">
            <img src={img} alt="img" />
          </div>

          <div className="question__option">
            <p>A :</p>
            <p>B :</p>
            <p>C :</p>
          </div>
          <div className="question__degree">
            <p>3 marks</p>
          </div>
        </div>

        <div className="question__action">
          <button className="cancel">Cancel</button>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ExamsReview;
