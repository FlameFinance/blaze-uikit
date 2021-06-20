import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 47 32" {...props}>
      <image width="47" height="32" href="/NOS.png" />
    </Svg>
  );
};

export default Icon;
