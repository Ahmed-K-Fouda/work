import Button from "../Button/Button";

function JobHeader() {
  return (
    <div className="job__search">
      <div className="job__search__header">
        <h1>Looking for a job ?</h1>
        <p>Here you can find best job match with your skills</p>
      </div>
      <div className="job__search__input">
        <input type="search" placeholder="Search for a job" />
        <div className="job__search__btn">
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
}

export default JobHeader;
