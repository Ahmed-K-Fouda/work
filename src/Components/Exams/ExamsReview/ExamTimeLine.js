
function ExamTimeLine() {
  //   const [timeLeft, setTimeLeft] = useState(5 * 60);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, []);

  //   const formatTime = (seconds) => {
  //     const minutes = Math.floor(seconds / 60);
  //     const remainingSeconds = seconds % 60;
  //     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  //   };

  //   const rangePercentage = (timeLeft / (5 * 60)) * 100;

  return (
    <div className="exam__time">
      <div className="time">55:00{/* {formatTime(timeLeft)} */}</div>
      <div className="line">
        <input
          type="range"
          value={55}
          //   {timeLeft / 60}
          min={0}
          max={5}
          //   style={{
          //     background: `linear-gradient(to right, var(--main-color) ${rangePercentage}%, gray ${rangePercentage}%)`,
          //   }}
          readOnly
        />
      </div>
    </div>
  );
}

export default ExamTimeLine
