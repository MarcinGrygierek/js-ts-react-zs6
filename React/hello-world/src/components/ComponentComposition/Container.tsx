import type { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <section>
      <header>
        <h1>Title</h1>
      </header>
      <main>{children}</main>
    </section>
  );
};
