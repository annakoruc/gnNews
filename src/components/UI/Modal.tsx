import { useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../../store/modal/modalSlice";

import "../../styles/components/UI/modal_style.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Modal = ({ children }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="modal_ovelay" onClick={() => dispatch(CLOSE_MODAL())}>
      <div className="modal_box">{children}</div>
    </div>
  );
};
