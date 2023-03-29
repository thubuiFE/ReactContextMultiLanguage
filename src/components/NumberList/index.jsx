// components
import NumberTop from "../../molecules/NumberTop";
// contexts
import { useLocale } from "../../contexts/LocaleContext";
// others
import "./styles.scss";

const NumberList = () => {
  const { localeDataSource } = useLocale();

  return (
    <div className="number-list-wrapper">
      <div className="number-list-wrapper-inner">
        <NumberTop number="+3.500" text={localeDataSource?.patients_treated} />
        <NumberTop
          number="+15"
          text={localeDataSource?.specialists_available}
        />
        <NumberTop number="+10" text={localeDataSource?.years_on_the_market} />
      </div>
    </div>
  );
};

export default NumberList;
