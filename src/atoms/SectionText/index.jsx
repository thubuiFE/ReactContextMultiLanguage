// styles
import "./styles.scss";

const SectionText = ({ text, style }) => (
  <div className="section-text-wrapper" style={{ style }}>
    {text}
  </div>
);

export default SectionText;
