import { memo } from "react";

export type SmartButtonProps = {
  onClick: () => void;
};

export const SmartButton = memo(({ onClick }: SmartButtonProps) => {
  console.log("SmartButton render");
  return <button onClick={onClick}>Smart click</button>;
});
