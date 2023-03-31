import { useNavigate } from "react-router-dom";

import "../../styles/components/UI/logo_style.scss";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <h1 className="logo" onClick={() => navigate("/")}>
      gn<span>News</span>
    </h1>
  );
};
