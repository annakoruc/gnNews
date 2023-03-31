import { useDispatch } from "react-redux";

import { changeSwitch } from "../../store/switch/SwitchSlice";
import "../../styles/components/UI/toggle_switch_style.scss";

export const ToggleSwitch = () => {
  const dispatch = useDispatch();

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          dispatch(changeSwitch());
        }}
      />
      <span />
    </label>
  );
};
