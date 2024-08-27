import { HiPhone, HiOutlineMail } from "react-icons/hi";
function PersonalDetails({ editable = false, details }) {
  return (
    <div className="personal__details">
      <div className="header">
        <h4>Personal Info</h4>
      </div>
      {details.details.map((detail, index) => (
        <div key={index} className="personal__info">
          <h5>{detail.label}</h5>
          {editable ? (
            <input type="text" defaultValue={detail.value} />
          ) : (
            <span>{detail.value}</span>
          )}
        </div>
      ))}

      <div className="header">
        <h4>Education</h4>
      </div>
      {details.education.map((edu, index) => (
        <div key={index} className="personal__info">
          <h5>{edu.label}</h5>
          {editable ? (
            <input type="text" defaultValue={edu.value} />
          ) : (
            <span>{edu.value}</span>
          )}
        </div>
      ))}

      <div className="header">
        <h4>Contact Info</h4>
      </div>
      <div className="personal__info contact__info">
        <HiOutlineMail
          style={{ fontSize: "25px", color: "var(--main-color)" }}
        />
        <div className="mail">
          {editable ? (
            <input type="email" defaultValue={details.email} />
          ) : (
            <span>{details.email}</span>
          )}
        </div>
      </div>
      <div className="personal__info contact__info">
        <HiPhone style={{ fontSize: "25px", color: "var(--main-color)" }} />
        <div className="phone">
          {editable ? (
            <input type="text" defaultValue={details.phone} />
          ) : (
            <span>{details.phone}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
