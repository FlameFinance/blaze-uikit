import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#e40189",
  primaryBright: "#e40189",
  primaryDark: "#e40189",
  secondary: "#76bdd5",
  success: "#fbfbef",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1968e",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeace",
  tertiary: "#EFF4F5",
  text: "#EAE2FC",
  textDisabled: "#888888",
  textSubtle: "#c9c4d4",
  borderColor: "#E9EAEB",
  card: "rgba(0.72,0.72,0.72,0.75)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#b19cd9",
  background: "#301934",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#b0151e",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "rgba(0.15,0.15,0.17,0.75)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
