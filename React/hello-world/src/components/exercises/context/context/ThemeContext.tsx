import { createContext } from "react";

export type ThemeContextType = {
  palette: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    contrast: string;
  };
  sizes: {
    main: number;
  };
  toggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  palette: {
    primary: "#0a304d",
    secondary: "#aaa01c",
    background: "#fafafa",
    text: "#000",
    contrast: "#fff",
  },
  sizes: {
    main: 10,
  },
  toggleMode: () => {},
});
