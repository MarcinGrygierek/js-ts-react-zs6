import { useState } from "react";

export const Fetch = () => {
  const [address, setAddress] = useState<string | null>(null);

  // przy pomocy then
  //   const fetchIpAddress = () => {
  //     fetch("https://api.ipify.org/?format=json").then((result) => {
  //       console.log(result);

  //       result.json().then((data) => {
  //         console.log(data);
  //       });
  //     });
  //   };

  const fetchIpAddress = async () => {
    const response = await fetch("https://api.ipify.org/?format=json");
    const ipRaw = await response.json();
    const ipParsed = ipRaw as { ip: string };

    setAddress(ipParsed.ip);
  };

  return (
    <>
      <p>{address}</p>
      <button onClick={fetchIpAddress}>Fetch IP</button>
    </>
  );
};
