import { useState } from "react";
import { Button } from "./Button";
import { ThemeContext } from "./context/ThemeContext";
import type { ThemeContextType } from "./context/ThemeContext";
import { Footer } from "./Footer";
import { Header } from "./Header";

const palleteLight = {
  palette: {
    primary: "red",
    secondary: "green",
    text: "#333",
    contrast: "#eee",
    background: "#ddd",
  },
  sizes: {
    main: 20,
  },
};

const paletteDark = {
  palette: {
    primary: "#eee",
    secondary: "#fe24aa",
    text: "#eee",
    contrast: "#333",
    background: "#111",
  },
  sizes: {
    main: 20,
  },
};

export const Ex1Context = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeContext
        value={{
          toggleMode,
          ...(theme === "light" ? paletteDark : palleteLight),
        }}
      >
        <Header />
        <Button />
        <Footer />
      </ThemeContext>
      <ThemeContext
        value={{
          toggleMode: () => {},
          palette: {
            primary: "red",
            secondary: "red",
            text: "red",
            contrast: "blue",
            background: "red",
          },
          sizes: {
            main: 20,
          },
        }}
      >
        <Button />
      </ThemeContext>
    </>
  );
};
