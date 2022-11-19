import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "Bang & Olufsen" },
  { name: "Daewoo" },
  { name: "Denon" },
  { name: "Grundig" },
  { name: "Hyundai" },
  { name: "JVC" },
  { name: "Kenwood" },
  { name: "LG" },
  { name: "Mystery" },
  { name: "Nakamichi" },
  { name: "Onkyo" },
  { name: "Panasonic" },
  { name: "Philips" },
  { name: "Samsung" },
  { name: "Sanyo" },
  { name: "Sharp" },
  { name: "Sony" },
  { name: "Supra" },
  { name: "TEAC" },
  { name: "Yamaha" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const MusicalCenter = () => {
  return (
    <div>
      <Options
        itemName={"brand"}
        title={"Марка музыкального центра"}
        items={brand}
      />
    </div>
  );
};

export default MusicalCenter;
