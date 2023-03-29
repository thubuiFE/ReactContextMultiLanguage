// styles
import "./styles.scss";

const Title = ({ text, style }) => (
  <div className="title-wrapper" style={style}>
    {text}
  </div>
);

export default Title;
