import { Fragment } from "react/jsx-runtime";

export const NestingElement = () => {
  // 1 - nadrzędny div
  //   return (
  //     <div>
  //       <p>Lorem ipsum</p>
  //       <p>Dolor sit amet</p>
  //     </div>
  //   );
  
  // 2 - Fragment
//   return (
//     <Fragment>
//       <p>Lorem ipsum</p>
//       <p>Dolor sit amet</p>
//     </Fragment>
//   );

  // 3 - <></>
  return (
    <>
      <p>Lorem ipsum</p>
      <p>Dolor sit amet</p>
    </>
  );
};
