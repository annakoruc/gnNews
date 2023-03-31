import { Sidebar } from "./Sidebar";

import "../styles/components/container.scss";

type props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Container = ({ children }: props) => {
  return (
    <div className="container">
      <Sidebar />
      {children}
    </div>
  );
};
