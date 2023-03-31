import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { changeSwitch } from "../../store/switch/SwitchSlice";
import "../../styles/components/UI/toggle_switch_style.scss";

export const ToggleSwitch = () => {
  // const switchBoolean = useSelector((state: RootState) => state.switch.isList);
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
