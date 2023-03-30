import "../../styles/components/UI/button_style.scss";

type props = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ title, onClick }: props) => {
  return (
    <>
      <button className="styled_button" onClick={onClick}>
        {title}
      </button>
    </>
  );
};
