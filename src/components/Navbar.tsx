import "../styles/components/navbar_style.scss";
import { Logo } from "./UI/Logo";
import { Button } from "./UI/Button";
import { ToggleSwitch } from "./UI/ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { ADD_CONTENT, CHANGE_IS_OPEN_CONTENT } from "../store/modal/modalSlice";
import { Modal } from "./UI";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => {
    return state.modal.isOpenContent;
  });

  const openModal = () => {
    dispatch(CHANGE_IS_OPEN_CONTENT());
    dispatch(ADD_CONTENT("Ania"));
    console.log("click");
  };

  return (
    <nav>
      <Logo />
      <div>
        <Button title="INFO" onClick={openModal} />
        <ToggleSwitch />
      </div>
      {isOpen && <Modal>'Aniaa'</Modal>}
    </nav>
  );
};
