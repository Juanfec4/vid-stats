import "./styles.scss";

export const Hero = () => {
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
      <h2>Try it</h2>
    </section>
  );
};

export default Hero;
