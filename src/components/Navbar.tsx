import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ADD_CONTENT, CHANGE_IS_OPEN_CONTENT } from "../store/modal/modalSlice";
import { RootState } from "../store";

import { Logo, Button, Modal, ToggleSwitch, ChangeLanguageButton } from "./UI";

import "../styles/components/navbar_style.scss";

export const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => {
    return state.modal.isOpenContent;
  });
  const location = useLocation();

  const openModal = () => {
    dispatch(CHANGE_IS_OPEN_CONTENT());
    dispatch(ADD_CONTENT("Ania"));
  };

  return (
    <nav>
      <Logo />
      <div className="buttons_div">
        <Button title={t("button.info")} onClick={openModal} />
        {location.pathname === "/" && <ChangeLanguageButton />}
        <ToggleSwitch />
      </div>
      {isOpen && (
        <Modal>
          <ul>
            <p>{t("info.fun.title")}</p>
            <li>{t("info.fun.first")}</li>
            <li>{t("info.fun.second")} </li>
          </ul>
          <ul>
            <p>{t("info.difficulty.title")}</p>
            <li>{t("info.difficulty.first")}</li>
            <li>{t("info.difficulty.second")}</li>
            <li>{t("info.difficulty.third")}</li>
          </ul>
          <ul>
            <p>{t("info.inAddition.title")}</p>
            <li>{t("info.inAddition.first")}</li>
            <li>{t("info.inAddition.second")}</li>
          </ul>
        </Modal>
      )}
    </nav>
  );
};
