import "./styles.scss";

const Button = ({ icon, text, handleClick, type }) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          return handleClick();
        }}
        className={`Button${type ? `--${type}` : ""}`}
      >
        <img src={icon} alt="" className="Button__icon" />{" "}
        <span className="Button__text">{text}</span>
      </button>
    </>
  );
};

export default Button;
