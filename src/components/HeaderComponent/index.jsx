// libs
import React from "react";
// components
import HeaderMenu from "../../molecules/HeaderMenu";
import Button from "../../atoms/Button";
// hooks
import Logo from "../../images/Logo (1).svg";
// contexts
import { useLocale } from "../../contexts/LocaleContext";
// styles
import "./styles.scss";

const HeaderComponent = ({ backgroundColor, color }) => {

  const { locale, setLocale, localeDataSource } = useLocale();

  return (
    <div className="header-component-wrapper">
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "132.86px", height: "17.38px" }}
      />
      <div className="locale-change">
        <select
          className="select-change-locale"
          defaultValue={locale}
          onChange={(e) => setLocale(e.target.value)}
        >
          <option value="vi">{localeDataSource.vi}</option>
          <option value="en">{localeDataSource.en}</option>
        </select>
      </div>
        <>
          <HeaderMenu color={color} />
          <Button />
        </>
    </div>
  );
};

export default HeaderComponent;
