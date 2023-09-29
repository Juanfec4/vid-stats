import "./styles.scss";

const ReportDashboard = ({ stats }) => {
  return (
    <>
      <div className="Stats-dashboard">
        <ul className="Stats-dashboard__list">
          <li className="Stats-dashboard__item">
            <p className="Stats-dashboard__text">
              <span className="Stats-dashboard__icon">📏</span>
              Average word length:{" "}
              <span className="Stats-dashboard__value">
                {stats.avg_word_length.toFixed(2)}
              </span>
            </p>
          </li>
          <li className="Stats-dashboard__item">
            <p className="Stats-dashboard__text">
              <span className="Stats-dashboard__icon">💡</span>
              Vocabulary richness:{" "}
              <span className="Stats-dashboard__value">
                {(stats.vocabulary_richness * 100).toFixed(2)}/100
              </span>
            </p>
          </li>
          <li className="Stats-dashboard__item">
            <p className="Stats-dashboard__text">
              <span className="Stats-dashboard__icon">🚀</span>
              Longest word:{" "}
              <span className="Stats-dashboard__value">
                {stats.longest_word}
              </span>
            </p>
          </li>
          <li className="Stats-dashboard__item">
            <p className="Stats-dashboard__text">
              <span className="Stats-dashboard__icon">✨</span>
              Shortest word:{" "}
              <span className="Stats-dashboard__value">
                {stats.shortest_word}
              </span>
            </p>
          </li>
          <li className="Stats-dashboard__item">
            <p className="Stats-dashboard__text">
              <span className="Stats-dashboard__icon">🌟</span>
              Common bigrams:{" "}
              <span className="Stats-dashboard__value">
                {stats.common_bigrams}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ReportDashboard;
