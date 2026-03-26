import type { ReactNode } from "react";

export type CompositionHeaderProps = {
    children: ReactNode;
    left: ReactNode,
    right: ReactNode
}

export const CompositionHeader = ({children, left, right}: CompositionHeaderProps) => {
  return (
    <header
      style={{
        display: "grid",
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 10,
        width: "100%",
      }}
    >
        <div>{left}</div>
        <div>{children}</div>
        <div>{right}</div>
    </header>
  );
};
