import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#bd182c",
  primaryBright: "#bd182c",
  primaryDark: "#aa8929",
  secondary: "#d56c2c",
  success: "#94a2f0",
  warning: "#6e5a25",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#dc746d",
  backgroundDisabled: "#c4949f",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#a27aba",
  tertiary: "#a11fb4",
  text: "#060748",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#010000",
  card: "#ffa9b2",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#762a97",
  background: "#690001",
  backgroundDisabled: "#690001",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#a27aba",
  primaryDark: "#980169",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#5c5a7ad",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
