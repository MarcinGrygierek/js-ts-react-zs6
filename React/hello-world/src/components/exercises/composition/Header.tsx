import type { ReactNode } from "react";

export type HeaderProps = {
  title: string;
  right: ReactNode;
};

export const Header = ({ title, right }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      {right}
    </header>
  );
};
