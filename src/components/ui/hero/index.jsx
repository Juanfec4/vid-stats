import "./styles.scss";
import step1Img from "/public/images/step-1.png";
import step2Img from "/public/images/step-2.png";
import step3Img from "/public/images/step-3.png";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero__site-identity">
        <h1 className="Hero__site-title">VidStats</h1>
        <h2 className="Hero__title">
          Transcribe YouTube videos and get word analyses in no time
        </h2>
        <p className="hero__text">
          Powered by Open-AI's whisper language model.
        </p>
      </div>
      <div className="Hero__steps-section">
        <span className="Hero__steps-list">
          <span className="Hero__step">
            <h3 className="Hero__step-title">
              Step 1: <span className="Hero__step-accent">enter a url</span>
            </h3>
            <img src={step1Img} alt="" className="Hero__image" />
          </span>
          <span className="Hero__step">
            <h3 className="Hero__step-title">
              Step 2:{" "}
              <span className="Hero__step-accent">Wait for results</span>
            </h3>
            <img src={step2Img} alt="" className="Hero__image" />
          </span>
          <span className="Hero__step">
            <h3 className="Hero__step-title">
              Step 3: <span className="Hero__step-accent">View report</span>
            </h3>
            <img src={step3Img} alt="" className="Hero__image" />
          </span>
        </span>
      </div>
      <h2>Try it</h2>
    </section>
  );
};

export default Hero;
