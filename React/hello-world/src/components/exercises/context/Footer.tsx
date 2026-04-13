import { useThemeContext } from "./hooks/useThemeContext";

export const Footer = () => {
  const { palette, sizes } = useThemeContext();
  return (
    <footer
      style={{
        padding: sizes.main * 3,
        color: palette.text,
        background: palette.background,
        textAlign: "center",
        fontSize: "1.5rem",
      }}
    >
      Footer
    </footer>
  );
};
