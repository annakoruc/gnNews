import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ADD_CONTENT, CHANGE_IS_OPEN_CONTENT } from "../store/modal/modalSlice";
import { RootState } from "../store";

import { Logo, Button, Modal, ToggleSwitch } from "./UI";

import "../styles/components/navbar_style.scss";
import { ChangeLanguageButton } from "./UI/ChangeLanguageButton";
import { useLocation } from "react-router-dom";

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
      <div>
        <Button title={t("button.info")} onClick={openModal} />
        {location.pathname === "/" && <ChangeLanguageButton />}
        <ToggleSwitch />
      </div>
      {isOpen && <Modal>'Uzupełnij'</Modal>}
    </nav>
  );
};
