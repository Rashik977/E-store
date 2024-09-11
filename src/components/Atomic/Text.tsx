import React from "react";
import { IText } from "../Interface/IText";

const Text = (props: IText) => {
  const { type, color = "inherit", children, style } = props;
  const BaseComponent = type ?? "p";

  return React.createElement(
    BaseComponent,
    { style: { color, ...style } },
    children
  );
};

export default Text;
