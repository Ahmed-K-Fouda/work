import { HiClock, HiCalendarDays, HiBellAlert } from "react-icons/hi2";
function ExamReviewHeader() {
  return (
    <div className="exam__review__header">
      <div className="left__header">
        <h2>Introduction to React Js</h2>
        <sm>lev 1, 20 marks</sm>
        <sm>
          <span>instructor: </span>Tarek Ali
        </sm>
      </div>
      <div className="right__header">
        <div className="right__header__info">
          <HiCalendarDays />
          <div className="right__header__data">
            <p>Date</p>
            <p>6th jun 2024</p>
          </div>
        </div>

        <div className="right__header__info">
          <HiClock />
          <div className="right__header__data">
            <p>Time</p>
            <p>12:30 AM</p>
          </div>
        </div>

        <div className="right__header__info">
          <HiBellAlert />
          <div className="right__header__data">
            <p>Duration</p>
            <p>1 Hour</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamReviewHeader;
