import FilterSection from "../Jobs/FilterSection/FilterSection";
import JobCard from "../Jobs/JobCard/JobCard";
import JobHeader from "../Jobs/JobHeader";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./JobApply.css";
import { useRef } from "react";
import Button from "../Button/Button";
function JobApply() {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <div className="job__apply__container">
      <div className="overlay"></div>
      <div className="job__apply">
        <div className="top__page">
          <p>Job</p>
          <p>6th jun 2023</p>
        </div>

        <JobHeader />

        <div className="job__main">
          <div className="job__filter">
            <div className="filter__head">
              <p>Filters</p>
              <span>Clear All</span>
            </div>

            <div className="select__option">
              <p>Location</p>
              <select>
                <option>Cairo</option>
                <option>Alex</option>
                <option>Giza</option>
              </select>
            </div>

            <FilterSection
              title="Job Type"
              options={["Full Time", "Part Time", "Remote"]}
            />

            <FilterSection
              title="Job Level"
              options={["Entry Level", "Intermediate", "Expert"]}
            />

            <FilterSection
              title="Job Salary"
              options={[
                "Under 4000 EGP",
                "Between 4000 & 8000 EGP",
                "More Than 8000 EGP",
              ]}
            />
          </div>

          <div className="job__found">
            <JobCard
              title="Front-End React JS Developer"
              company="Eptikar IT Solutions"
              location="Obour City"
              salary="5000EGP - 8000EGP Per Month"
              workType="On Site"
            >
              <div className="username">
                <h3>Balqess Hamdi Saber</h3>
                <sm>Computer Science, Cairo University</sm>
              </div>

              <div className="user__info">
                <div className="user__email">
                  <label>Email</label>
                  <input type="email" />
                </div>

                <div className="user__exp">
                  <label>Years of experience</label>
                  <input type="email" />
                </div>

                <div className="user__mobile">
                  <label>Mobile Number</label>
                  <input type="email" />
                </div>
              </div>
              <div className="upload__title">
                <p>Upload Your Resume</p>
              </div>
              <div
                className="upload-container"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="upload-icon">
                  <FaCloudUploadAlt size={60} />
                </div>
                <p className="upload-text">
                  Drag & drop files or{" "}
                  <span className="browse-link" onClick={handleBrowseClick}>
                    Browse
                  </span>
                </p>
                <p className="supported-formats">
                  Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                  PPT
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>

              <div className="btn__resume">
                <Button>Submit</Button>
                <button className='cancel__btn'>Cancel</button>
              </div>
            </JobCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApply;
