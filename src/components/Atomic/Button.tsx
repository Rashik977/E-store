import { IButton } from "../Interface/IButton";

const Button = (props: IButton) => {
  const {
    type,
    children,
    paddingX = "0px",
    paddingY = "12px",
    onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      className={`btn ${type}`}
      style={{ padding: `${paddingY} ${paddingX}` }}
    >
      {children}
    </button>
  );
};

export default Button;
