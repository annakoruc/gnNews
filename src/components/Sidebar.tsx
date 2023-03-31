import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import countries from "../config/countries";

import hamburger from "../assets/icons/hamburger.svg";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "../styles/components/sidebar_style.scss";

export const Sidebar = () => {
  const { t } = useTranslation();
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <aside>
      <div className={openSidebar ? "sidebar_menu" : "sidebar_menu hiden"}>
        {countries.length === 8 &&
          countries.map(
            (country) =>
              country.name && (
                <NavLink
                  key={country.code}
                  to={`/country/${country.name}`}
                  onClick={() => setOpenSidebar(!openSidebar)}
                >
                  <span className={`fi fi-${country.code}`} />
                  {country.name.toUpperCase()}
                </NavLink>
              )
          )}
      </div>
      <button
        className="show_sidebar_button"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <p>{t("button.select")}</p>
        <img src={hamburger} alt="hamburger" />
      </button>
    </aside>
  );
};
