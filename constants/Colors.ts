/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = "#2196F3"; // Azul primário do Material Design
const tintColorDark = "#FFC107"; // Amarelo âmbar do Material Design

export const Colors = {
  light: {
    text: "#1E88E5", // Azul escuro (legível em fundo branco)
    background: "#FFFFFF", // Branco puro
    tint: tintColorLight,
    tabIconDefault: "#9E9E9E", // Cinza escuro (contraste com fundo branco)
    tabIconSelected: tintColorLight,
    surface: "#FFFFFF", // Branco puro para elementos elevados
    income: "#66BB6A",
    expense: "#EF5350",
  },
  dark: {
    text: "#FFFFFF", // Branco puro (legível em fundo escuro)
    background: "#121212", // Cinza escuro profundo
    tint: tintColorDark,
    tabIconDefault: "#616161", // Cinza médio (contraste com fundo escuro)
    tabIconSelected: tintColorDark,
    surface: "#1E1E1E", // Cinza escuro para elementos elevados
    income: "#66BB6A",
    expense: "#EF5350",
  },
};
