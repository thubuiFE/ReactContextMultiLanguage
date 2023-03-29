import "./styles.scss";

const NumberTop = ({ number, text }) => (
  <div className="number-top">
    <div className="number">{number}</div>
    <div className="text">{text}</div>
  </div>
);

export default NumberTop;
