import "../Register/RegisterCourses/RegisterCourses.css";
function RegisterRange() {
  return (
    <>
      <div className="level__info">
        <span>Level: 1</span>
        <span>97%</span>
      </div>
      <div className="level__line">
        <input type="range" min="0" max="100" value="97" />
      </div>
    </>
  );
}

export default RegisterRange;
