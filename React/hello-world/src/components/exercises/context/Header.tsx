import { useThemeContext } from "./hooks/useThemeContext";

export const Header = () => {
  const { palette, sizes } = useThemeContext();
  return (
    <header
      style={{
        padding: sizes.main * 3,
        color: palette.text,
        background: palette.background,
        textAlign: "center",
        fontSize: "2rem",
      }}
    >
      Header
    </header>
  );
};
