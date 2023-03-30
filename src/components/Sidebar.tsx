import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/sidebar_style.scss";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { countries } from "../config/countries";
import hamburger from "../assets/icons/hamburger.svg";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <aside>
      <div className={openSidebar ? "sidebar_menu" : "sidebar_menu hiden"}>
        {countries.map((country) => (
          <>
            <NavLink key={country.code} to={`/country/${country.name}`}>
              <span className={`fi fi-${country.code}`} />
              {country.name.toUpperCase()}
            </NavLink>
          </>
        ))}
      </div>
      <button
        className="show_sidebar_button"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <p>Select Country</p>
        <img src={hamburger} alt="hamburger" />
      </button>
    </aside>
  );
};
