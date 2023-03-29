// libs
import React, { useState } from "react";
// context
import { useLocale } from "../../contexts/LocaleContext";
// dataSources
import { dataMenu } from "../../dataSources/menuData";
// styles
import "./styles.scss";

const HeaderMenu = () => {
  const [itemSelected, setItemSelected] = useState(0);
  const { localeDataSource } = useLocale();

  return (
      <div className="header-menu-wrapper">
        <ul>
            {dataMenu?.map((item) => (
                <a href="#" key={item?.key} onClick={() => setItemSelected(item?.key)} >
                    <li
                        className={item?.key === itemSelected ? "li-selected" : ""}
                        style={{ color: "#00856F" }}
                    >
                        {item?.key === itemSelected ? (
                        <span style={{ borderColor: "#00856F" }}>
                            {localeDataSource[item?.title]}
                        </span>
                        ) : (
                            localeDataSource[item?.title]
                        )}
                    </li>
                </a>
            ))}
        </ul>
      </div>
    )
};

export default HeaderMenu;
