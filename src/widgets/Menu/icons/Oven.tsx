import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import { CgSmartHomeCooker } from "react-icons/cg";
import { GiCampCookingPot } from "react-icons/gi";

const Icon: React.FC<SvgProps> = (props) => {
  const { color } = props;
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <CgSmartHomeCooker color={color} size='24px' />
    </Svg>    
  );
};

export default Icon;
