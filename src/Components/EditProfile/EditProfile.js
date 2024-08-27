import profileImg from "../../../src/images/empty.jpg";
import "../Profile/Profile.css";
import "./EditProfile.css";
import Button from "../Button/Button";
import Details from "./Details/Details";

function EditProfile({ personalData, onUpdate }) {
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
            <Button>Save Changes</Button>
          </div>
        </div>
        <Details />
      </div>
    </div>
  );
}

export default EditProfile;
