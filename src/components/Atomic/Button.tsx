import { IButton } from "../../Interface/IButton";

const Button = (props: IButton) => {
  const { type, children, onClick } = props;

  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {children}
    </button>
  );
};

export default Button;
