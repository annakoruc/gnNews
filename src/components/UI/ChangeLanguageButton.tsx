import i18n from "../../i18n";

import "../../styles/components/UI/change_lng_button_style.scss";

export const ChangeLanguageButton = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const pl = "pl";
  const en = "en";

  console.log(i18n.language);

  const buttonActiveClass = (lng: string) => {
    return i18n.language === lng ? " button_select active" : "button_select";
  };

  return (
    <div className="two_buttons">
      <button
        className={buttonActiveClass(pl)}
        onClick={() => changeLanguage(pl)}
      >
        {pl.toUpperCase()}
      </button>
      <button
        className={buttonActiveClass(en)}
        onClick={() => changeLanguage(en)}
      >
        {en.toUpperCase()}
      </button>
    </div>
  );
};
