// components
import SectionText from "../../atoms/SectionText";
import TitleContent from "../../atoms/TitleContent";
import DescriptionContent from "../../atoms/DescriptionContent";
import Button from "../../atoms/Button";
// images
import image from "../../images/image (1).png";
import iconWhatSapp from "../../images/whatsapp.svg";
// contexts
import { useLocale } from "../../contexts/LocaleContext";
// others
import "./styles.scss";

const TopCenterComponent = () => {
  const { localeDataSource } = useLocale();

  return (
    <div className="top-center-component">
      <div className="top-center-content">
        <SectionText text={localeDataSource?.welcome_to_doctor_care} />
        <TitleContent
          text={localeDataSource?.simplified_healthcare_for_everyone}
          style={{
            fontSize: "52px",
            fontWeight: "700px",
            width: "fit-content",
          }}
        />
        <DescriptionContent
          text={localeDataSource?.description_welcome_to_doctor_care}
          style={{ width: "fit-content", marginBottom: "32px" }}
        />
        <Button
          text={localeDataSource?.schedule_your_appointment}
          icon={iconWhatSapp}
          backgroundColor="#00856F"
          color="#FFFFFF"
        />
      </div>
      <div className="top-center-image">
        <img src={image} alt="human" />
      </div>
    </div>
  );
};

export default TopCenterComponent;
