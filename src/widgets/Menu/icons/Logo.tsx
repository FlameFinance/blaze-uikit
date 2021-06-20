import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 auto 50%" {...props}>
      <image
        width="auto"
        height="50%"
        href={isDark ? "/full-logo.png" : "/full-logo.png"}
      />
    </Svg>
  );
};

export default Logo;
