import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    height={32}
    width={32}
    {...props}
  >
    <path d="M31.25 0v380h50v-20h217.5v20h50V0H31.25zm297.5 20v60H51.25V20h277.5zM51.25 340V100h277.5v240H51.25z" />
    <path d="M80 310h220V130H80v180zm20-160h50v20h80v-20h50v140H100V150zM90 40h40v20H90zM170 40h40v20h-40zM250 40h40v20h-40z" />
  </svg>
);
export default Icon;
