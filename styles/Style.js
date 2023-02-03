import { StyleSheet } from "react-native";

const COLORS = {
  id: "dark",
  name: "Dark",
  dropdownTheme: "DARK",
  text: "#F2F7FF",
  textMuted: "#abaeb3",
  accent: "#28a99e",
  danger: "#f52a3a",
  background: "#0F1012",
  background1: "#1c1d21",
  background2: "#27292e",
};

export const ColorThemes = [
  {
    id: "dark",
    name: "Dark",
    dropdownTheme: "DARK",
    text: "#F2F7FF",
    textMuted: "#abaeb3",
    accent: "#28a99e",
    danger: "#f52a3a",
    background: "#0F1012",
    background1: "#1c1d21",
    background2: "#27292e",
  },
  {
    id: "light",
    name: "Light",
    dropdownTheme: "LIGHT",
    text: "#0F1012",
    textMuted: "#abaeb3",
    accent: "#28a99e",
    danger: "#f52a3a",
    background: "#f0efed",
    background1: "#e3e2de",
    background2: "#d8d6d1",
  },
];

export function useTheme(theme) {
  return ColorThemes[ColorThemes.indexOf(ColorThemes.find((ct) => ct.id === theme))] ?? ColorThemes[0];
}

export const GLOBAL_STYLES = StyleSheet.create({
  COLORS, // Global colors
  pageContainer: {
    // paddingHorizontal: 10,
    paddingVertical: 5,
  },
  h1: {
    fontSize: 24,
    textAlign: "left",
    paddingStart: 8,
  },
  h2: {
    fontSize: 16,
    color: COLORS.text,
  },
  h2Light: {
    fontSize: 16,
    color: COLORS.foreground,
  },
  h3Light: {
    fontSize: 12,
    color: COLORS.foreground,
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
});
