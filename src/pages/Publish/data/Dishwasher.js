import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AEG" },
  { name: "Ardo" },
  { name: "Asko" },
  { name: "BEKO" },
  { name: "Baumatic" },
  { name: "Blomberg" },
  { name: "Bosch" },
  { name: "Candy" },
  { name: "De Dietrich" },
  { name: "Electrolux" },
  { name: "Fagor" },
  { name: "Gaggenau" },
  { name: "Gorenje" },
  { name: "Haier" },
  { name: "Hankel" },
  { name: "Hansa" },
  { name: "Hotpoint-Ariston" },
  { name: "Indesit" },
  { name: "Kaiser" },
  { name: "Kuppersbusch" },
  { name: "LG" },
  { name: "Mabe" },
  { name: "Miele" },
  { name: "Neff" },
  { name: "Samsung" },
  { name: "Siemens" },
  { name: "Smeg" },
  { name: "TEKA" },
  { name: "Whirlpool" },
  { name: "Zanussi" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const Dishwasher = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default Dishwasher;
