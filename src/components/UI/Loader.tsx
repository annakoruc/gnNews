import React from "react";
import { MutatingDots } from "react-loader-spinner";

import "../../styles/components/UI/loader_style.scss";

export const Loader = () => {
  return (
    <div className="loader">
      <MutatingDots
        height="100"
        width="100"
        color="#8b6af3"
        secondaryColor="#8b6af3"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </div>
  );
};
