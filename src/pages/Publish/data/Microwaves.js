import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AEG" },
  { name: "ALPARI" },
  { name: "BEKO" },
  { name: "Bork" },
  { name: "Bosch" },
  { name: "Daewoo" },
  { name: "Delonghi" },
  { name: "Electrolux" },
  { name: "Erisson" },
  { name: "Gaggenau" },
  { name: "Gorenje" },
  { name: "Hyundai" },
  { name: "Kuppersbusch" },
  { name: "LG" },
  { name: "Miele" },
  { name: "Moulinex" },
  { name: "Mystery" },
  { name: "Neff" },
  { name: "Panasonic" },
  { name: "Rolsen" },
  { name: "Samsung" },
  { name: "Scarlett" },
  { name: "Sharp" },
  { name: "Siemens" },
  { name: "Supra" },
  { name: "Vitek" },
  { name: "Whirlpool" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const Microwaves = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default Microwaves;
