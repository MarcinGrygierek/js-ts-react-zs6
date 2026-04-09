import { useState } from "react";

export const CallStack = () => {
  const [value, setValue] = useState(0);
  const foo2 = (a: number) => {
    // debugger;
    return a * 25;
  };
  const baz = (a: number) => {
    // debugger;
    return a + foo2(a);
  };

  const bar = (a: number, b: number) => {
    // debugger;
    return b * baz(a);
  };

  const foo = (a: number, b: number) => {
    // debugger;
    return (a + b) / bar(b, a);
  };

  const handleClick = (a: number, b: number, c: number) => {
    // debugger;
    // for (let i = 0; i < 10000000000; i++) {}
    setValue(a * foo(b, c));
  };

  return (
    <button onClick={() => handleClick(Math.random() * 10, Math.random() * 10, Math.random() * 10)}>
      Click me to change {value}
    </button>
  );
};
