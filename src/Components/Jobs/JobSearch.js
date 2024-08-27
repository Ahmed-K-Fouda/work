import "./JobSearch.css";
import JobHeader from "./JobHeader";
import Button from "../Button/Button";
import FilterSection from "./FilterSection/FilterSection";
import JobCard from "./JobCard/JobCard";

function JobSearch() {
  return (
    <div className="jobs__container">
      <div className="overlay"></div>
      <div className="jobs">
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

            <div className="filter__btn">
              <Button>Create Your Cv</Button>
            </div>
          </div>

          <div className="job__found">
            <JobCard
              title="Front-End React JS Developer"
              company="Eptikar IT Solutions"
              location="Obour City"
              salary="5000EGP - 8000EGP Per Month"
              workType="On Site"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque deleniti labore quas eaque esse numquam voluptatem explicabo tempora vero, et accusantium voluptatum distinctio sint!"
              tags={["React Js", "Development"]}
              timePosted="2 h ago"
            />

            <JobCard
              title="Front-End React JS Developer"
              company="Eptikar IT Solutions"
              location="Obour City"
              salary="5000EGP - 8000EGP Per Month"
              workType="On Site"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque deleniti labore quas eaque esse numquam voluptatem explicabo tempora vero, et accusantium voluptatum distinctio sint!"
              tags={["React Js", "Development"]}
              timePosted="2 h ago"
            />

            <JobCard
              title="Front-End React JS Developer"
              company="Eptikar IT Solutions"
              location="Obour City"
              salary="5000EGP - 8000EGP Per Month"
              workType="On Site"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque deleniti labore quas eaque esse numquam voluptatem explicabo tempora vero, et accusantium voluptatum distinctio sint!"
              tags={["React Js", "Development"]}
              timePosted="2 h ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSearch;
