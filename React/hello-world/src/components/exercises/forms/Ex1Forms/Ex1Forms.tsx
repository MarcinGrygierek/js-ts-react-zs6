import { useEffect, useState } from "react";

export const Ex1Forms = () => {
  // Opcja 1 - pole bez mozliwości zmiany zawartości
  //     const [selectValue, setSelectValue] = useState("");

  //   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectValue(e.target.value);
  //   };

  //   return (
  //     <>
  //       <select value={selectValue} onChange={handleSelectChange}>
  //         <option>A</option>
  //         <option>B</option>
  //         <option>C</option>
  //       </select>
  //       <input type="text" name="value" value={selectValue} />
  //     </>
  //   );
  const [selectValue, setSelectValue] = useState("");
  const [value, setValue] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    setValue(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <select value={selectValue} onChange={handleSelectChange}>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <input
        type="text"
        name="value"
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};
