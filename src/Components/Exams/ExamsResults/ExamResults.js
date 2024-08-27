import ExamReviewHeader from "../ExamsReview/ExamReviewHeader";
import ExamTimeLine from "../ExamsReview/ExamTimeLine";
import "./ExamResults.css";
import "../ExamsReview/ExamsReview.css";
import CircularProgress from "../../Register/CircularProgress/CircularProgress";
import Button from "../../Button/Button";
function ExamResults() {
  return (
    <div className="exam__result__container">
      <div className="overlay"></div>
      <div className="exam__result">
        <div className="top__page">
          <p>Online Exam Results</p>
          <p>6th jun 2024</p>
        </div>

        <ExamReviewHeader />

        <ExamTimeLine />

        <div className="result__details">
          <div className="result__details__header">
            <CircularProgress percentage={99} />
            <Button>View Answers</Button>
          </div>

          <div className="result__details__info">
            <div className="info">
              <p>Number of question answered:</p>
              <span>20</span>
            </div>
            <div className="info">
              <p>Number of question not answered:</p>
              <span>19</span>
            </div>
            <div className="info">
              <p>Number of question answered correctly:</p>
              <span>19</span>
            </div>
            <div className="info">
              <p>Number of wrong answer:</p>
              <span>19</span>
            </div>
            <div className="info">
              <p>Time token:</p>
              <span>60:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamResults;
