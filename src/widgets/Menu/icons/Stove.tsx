import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import { CgSmartHomeCooker } from "react-icons/cg";
import { GiCampCookingPot } from "react-icons/gi";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <GiCampCookingPot/>
  );
};

export default Icon;
