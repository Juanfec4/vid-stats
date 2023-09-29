import step1Img from "/public/images/step-1.png";
import step2Img from "/public/images/step-2.png";
import step3Img from "/public/images/step-3.png";

import "./styles.scss";

const StepsSection = () => {
  return (
    <div className="Steps">
      <span className="Steps__list">
        <span className="Steps__item">
          <h3 className="Steps-title">
            Step 1: <span className="Step-accent">enter a url</span>
          </h3>
          <img src={step1Img} alt="" className="Steps__image" />
        </span>
        <span className="Steps__item">
          <h3 className="Steps-title">
            Step 2: <span className="Step-accent">Wait for results</span>
          </h3>
          <img src={step2Img} alt="" className="Steps__image" />
        </span>
        <span className="Steps__item">
          <h3 className="Steps-title">
            Step 3: <span className="Step-accent">View report</span>
          </h3>
          <img src={step3Img} alt="" className="Steps__image" />
        </span>
      </span>
    </div>
  );
};
export default StepsSection;
