// import './StyledComponent.css';
// bezpieczniej - CSS modules, style pozostają lokalne
// https://www.w3schools.com/react/react_css_modules.asp
import styles from "./styles.module.css";

export const StyledComponent = () => {
  return <div className={styles["icon-plus"]}>+</div>;
  // return <div className="icon-plus">+</div>;
};
