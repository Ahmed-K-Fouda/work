import About from "../../Profile/About/About";
import PersonalDetails from "../../Profile/PersonalDetails/PersonalDetails";
import "../../Profile/PersonalInfo/PersonalInfo.css";
function Details() {
  return (
    <div className="personal">
      <PersonalDetails
        editable={true}
        details={{
          email: "ahmed@gmail.com",
          phone: "01001 225 8874",
          details: [
            { label: "Student ID", value: "12345" },
            { label: "Age", value: "29" },
            { label: "Nationality", value: "Egyptian" },
            { label: "Country", value: "Egypt" },
            { label: "City", value: "Cairo" },
          ],
          education: [
            { label: "University", value: "Cairo University" },
            { label: "Major", value: "Computer Science" },
            { label: "Graduation Year", value: "2019" },
          ],
        }}
      />

      <About />
    </div>
  );
}

export default Details;
