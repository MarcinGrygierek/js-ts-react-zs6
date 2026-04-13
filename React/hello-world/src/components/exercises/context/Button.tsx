import { useThemeContext } from "./hooks/useThemeContext";

export const Button = () => {
  const { palette, sizes, toggleMode } = useThemeContext();
  return (
    <button
      onClick={toggleMode}
      style={{
        color: palette.contrast,
        background: palette.primary,
        padding: sizes.main,
        borderRadius: sizes.main / 2,
        border: "none",
      }}
    >
      Click
    </button>
  );
};
