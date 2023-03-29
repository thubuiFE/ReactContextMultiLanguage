// styles
import "./styles.scss";

const DescriptionContent = ({ text, style }) => (
  <div className="description-wrapper" style={style}>
    {text}
  </div>
);

export default DescriptionContent;
