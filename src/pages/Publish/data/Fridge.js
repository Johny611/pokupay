import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AEG" },
  { name: "Amana" },
  { name: "Ardo" },
  { name: "Ariston" },
  { name: "BEKO" },
  { name: "Blomberg" },
  { name: "Bosch" },
  { name: "Candy" },
  { name: "Chambrer" },
  { name: "Climadiff" },
  { name: "Daewoo" },
  { name: "Electrolux" },
  { name: "Frigidaire" },
  { name: "Gaggenau" },
  { name: "Gorenje" },
  { name: "Haier" },
  { name: "Hansa" },
  { name: "Indesit" },
  { name: "Kuppersbusch" },
  { name: "LG" },
  { name: "Liebherr" },
  { name: "Maytag" },
  { name: "Miele" },
  { name: "Nardi" },
  { name: "Neff" },
  { name: "NORD" },
  { name: "OAK" },
  { name: "Panasonic" },
  { name: "Pozis" },
  { name: "Samsung" },
  { name: "Sharp" },
  { name: "Siemens" },
  { name: "Smeg" },
  { name: "Snaige" },
  { name: "Stinol" },
  { name: "TEKA" },
  { name: "Vestfrost" },
  { name: "Vinosafe" },
  { name: "Whirlpool" },
  { name: "Атлант" },
  { name: "Бирюса" },
  { name: "Саратов" },
  { name: "Смоленск" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const Fridge = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка холодильника"} items={brand} />
    </div>
  );
};

export default Fridge;
