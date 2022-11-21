import React from "react";
import Options from "../components/Options";

const types = [
  { name: "Nintendo DS" },
  { name: "Nintendo Wii" },
  { name: "Sony PlayStation" },
  { name: "Sony PSP" },
  { name: "XBOX" },
  { name: "other", rus: "Другая", eng: "Other", uzb: "Boshqa" },
];

const Consoles = () => {
  return (
    <div>
      <Options itemName={"consoleType"} title={"Тип приставки"} items={types} />
    </div>
  );
};

export default Consoles;
