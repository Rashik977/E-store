import { useNavigate } from "react-router-dom";
import { ILink } from "../../Interface/ILink";

const Link = (props: ILink) => {
  const navigate = useNavigate();
  const { href = "/", children, underline = false } = props;

  return (
    <a
      onClick={() => navigate(href)}
      style={{
        textDecoration: underline ? "underline" : "none",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
};

export default Link;
