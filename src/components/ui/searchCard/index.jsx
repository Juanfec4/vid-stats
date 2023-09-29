import Button from "../button";
import Input from "../input";

import reportIcon from "/public/icons/report-search.svg";

import useStore from "../../../store/useStore";
import { useState } from "react";

import "./styles.scss";

const SearchCard = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const { fetchVideo, toggleLoading } = useStore();

  const handleSubmitVideo = () => {
    toggleLoading();
    fetchVideo(videoUrl);
    setVideoUrl("");
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  return (
    <>
      <div className="Search-card">
        <h2 className="Search-card__title"> Analyze Video</h2>
        <p className="Search-card__description">
          Enter the URL of any YouTube video (&lt; 3 minutes), and get an
          in-depth analysis on the video's transcription. This includes:
          most-repeated words, longest word, shortest word, vocabulary richness,
          etc.
        </p>
        <div className="Search-card__input-container">
          <Input
            placeholder={"https://www.youtube.com/watch?v=jNQXAC9IVRw"}
            label={"Video link"}
            name={"videoURL"}
            value={videoUrl}
            handleChange={handleVideoUrlChange}
          />
          <Button
            text={"Analyze"}
            icon={reportIcon}
            type={"primary"}
            handleClick={handleSubmitVideo}
          />
        </div>
      </div>
    </>
  );
};

export default SearchCard;
