function About() {
    return (
      <div className="about">
        <div className="about__head">
          <h4>About</h4>
          <p>
            ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae
            quia sunt velit illum excepturi?
          </p>
        </div>
        <div className="in__progress">
          <div className="in__progress__head">
            <h4>in progress</h4>
          </div>
          <div className="subject">
            <div className="in__progress__subject">
              <h4>introduction to data analysis</h4>
            </div>
            <div className="in__progress__info">
              <span className="instructor">
                instructor: <span className="name">Ahmed Ali</span>
              </span>
              <span>Lev.1</span>
            </div>
          </div>

          <div className="subject">
            <div className="in__progress__subject">
              <h4>introduction to React Js</h4>
            </div>
            <div className="in__progress__info">
              <span className="instructor">
                instructor: <span className="name">Ahmed Ali</span>
              </span>
              <span>Lev.5</span>
            </div>
          </div>
        </div>

        <div className="in__progress">
          <div className="in__progress__head">
            <h4>Previous</h4>
          </div>
          <div className="subject">
            <div className="in__progress__subject">
              <h4>System analysis and design</h4>
            </div>
            <div className="in__progress__info">
              <span className="instructor">
                instructor: <span className="name">Sarah Ali</span>
              </span>
              <span>Lev.1</span>
            </div>
          </div>

          <div className="subject">
            <div className="in__progress__subject">
              <h4>introduction to React Js</h4>
            </div>
            <div className="in__progress__info">
              <span className="instructor">
                instructor: <span className="name">Alaa Mohamed</span>
              </span>
              <span>Lev.5</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About
