import React from "react";
import { HiClock, HiMenu } from "react-icons/hi";
import Button from "../../Button/Button";
import "./JobCard.css";
const JobCard = ({
  title,
  company,
  location,
  salary,
  workType,
  description,
  tags,
  timePosted,
  children,
}) => {
  return (
    <div className="job__contain">
      <div className="job__title__header">
        <div className="job__title">
          <span>
            <HiMenu style={{ color: "darkred" }} />
            IT
          </span>
          <h2>{title}</h2>
          <p>
            {company}, {location}
          </p>
        </div>
        <div className="job__salary">
          <p>{salary}</p>
          <sm>{workType}</sm>
        </div>
      </div>

      <div className="job__description">
        <div className="job__parag">
          <p>{description}</p>
        </div>
        <div className="job__tech">
          {tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {tags ? (
          <div className="job__foot">
            <p>
              <HiClock /> {timePosted}
            </p>
            <Button>View Details</Button>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      {children}
    </div>
  );
};

export default JobCard;
