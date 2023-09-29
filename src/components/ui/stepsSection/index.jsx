import step1Img from "/public/images/step-1.png";
import step2Img from "/public/images/step-2.png";
import step3Img from "/public/images/step-3.png";

import "./styles.scss";

const StepsSection = () => {
  return (
    <div className="Steps">
      <div className="Steps__list">
        <div className="Steps__item">
          <h3 className="Steps__title">
            Step 1: <span className="Steps__accent">enter a url</span>
          </h3>
          <p className="Steps__text">
            Enter a valid YouTube video URL, it must be shorter than 3 minutes.
          </p>
          <img src={step1Img} alt="" className="Steps__image" />
        </div>
        <div className="Steps__item">
          <h3 className="Steps__title">
            Step 2: <span className="Steps__accent">Wait for results</span>
          </h3>
          <p className="Steps__text">
            The application will connect with the vid-stats-api, fetch the
            YouTube video, get a response object with all the details
          </p>
          <img src={step2Img} alt="" className="Steps__image" />
        </div>
        <div className="Steps__item">
          <h3 className="Steps__title">
            Step 3: <span className="Steps__accent">View report</span>
          </h3>
          <p className="Steps__text">
            A Results page will appear showing the video, it's title, the
            description, some quick details such as avg. word length, vocabulary
            richness, longest word, shortest word, common bigrams,and a word
            frequency distribution table (which may be sorted).
          </p>
          <img src={step3Img} alt="" className="Steps__image" />
        </div>
      </div>
    </div>
  );
};
export default StepsSection;
