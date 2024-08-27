import "./Profile.css";
import profileImg from "../../../src/images/empty.jpg";
import Button from "../Button/Button";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
function Profile() {
  const date = new Date().toDateString();
  return (
    <div className="profile__container">
      <div className="overlay"></div>
      <div className="profile">
        <div className="top__page">
          <p>Profile</p>
          <p>{date}</p>
        </div>

        <div className="edit__profile">
          <div className="profile__details">
            <div className="profile__img">
              <img src={profileImg} alt="img" />
            </div>
            <div className="profile__info">
              <h3>The Name ...</h3>
              <p>Computer science, cairo university</p>
            </div>
          </div>
          <div className="edit__btn">
            <Button>Edit profile</Button>
          </div>
        </div>
        <PersonalInfo />
      </div>
    </div>
  );
}

export default Profile;
