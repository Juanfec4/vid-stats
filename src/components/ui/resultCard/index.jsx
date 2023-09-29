import "./styles.scss";

import useStore from "../../../store/useStore";
import { formatDate } from "../../../utils/formatters";
import ReportDashboard from "../reportDashboard";
import FrequencyTable from "../frequencyTable";

const ResultCard = () => {
  const { video } = useStore();
  const videoData = video?.data?.video;

  return video.error || video.isLoading || videoData ? (
    <div className="Result-card">
      {video.isLoading
        ? "analyzing video, this might take a couple of minutes :)"
        : null}
      {video.error && !video.isLoading ? video.error : null}
      {videoData && !video.isLoading ? (
        <>
          <h2 className="Result-card__title">Results</h2>
          <div className="Result-card__video-container">
            <div className="Result-card__info-section">
              <div className="Result-card__video-metadata">
                <h3 className="Result-card__video-title">{videoData.title}</h3>
                <h4 className="Result-card__video-subtitle">
                  {videoData.channel}
                  {" | "}
                  {formatDate(videoData.upload_date)}
                  {" | "}
                  {videoData.view_count.toLocaleString()} views
                </h4>
                <div className="Result-card__quick-report">
                  <img
                    src={videoData.thumbnail}
                    alt={videoData.title}
                    className="Result-card__thumbnail"
                  />
                  <ReportDashboard stats={videoData.stats} />
                </div>
              </div>
            </div>
            <div className="Result-card__info-section">
              <h5 className="Result-card__section-title">Video description</h5>
              <span className="Result-card__output-box">
                <p className="Result-card__text">{videoData.description}</p>
              </span>
            </div>
            <div className="Result-card__info-section">
              <h5 className="Result-card__section-title">
                Word frequency report
              </h5>
              <FrequencyTable occurrences={videoData.stats.occurrences} />
            </div>
            <div className="Result-card__info-section">
              <h5 className="Result-card__section-title">Transcribed audio</h5>
              <span className="Result-card__output-box">
                <p className="Result-card__text">{videoData.transcription}</p>
              </span>
            </div>
          </div>
        </>
      ) : null}
    </div>
  ) : null;
};
export default ResultCard;
