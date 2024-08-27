import Button from "../../Button/Button";
import "./Welcome.css";
function Welcome() {
  const date = new Date().toDateString();

  return (
    <>
      <div className="top__page">
        <p>Student Portal</p>
        <p>{date}</p>
      </div>

      <div className="welcome">
        <h1>
          Welcome Back <span className="name">(Name)</span>
        </h1>
        <Button>view profile</Button>
      </div>
    </>
  );
}

export default Welcome;
