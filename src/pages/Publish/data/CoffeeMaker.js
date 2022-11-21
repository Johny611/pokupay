import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AEG" },
  { name: "Ariete" },
  { name: "Ascaso" },
  { name: "Bezzera" },
  { name: "Bork" },
  { name: "Bosch" },
  { name: "Brasilia" },
  { name: "Braun" },
  { name: "Briel" },
  { name: "Delonghi" },
  { name: "Electrolux" },
  { name: "Expobar" },
  { name: "Faema" },
  { name: "First" },
  { name: "Futurmat" },
  { name: "Gaggia" },
  { name: "Irit" },
  { name: "Jura" },
  { name: "Kenwood" },
  { name: "Krups" },
  { name: "La Cimbali" },
  { name: "La Marzocco" },
  { name: "La Pavoni" },
  { name: "Lavazza" },
  { name: "Markus" },
  { name: "Melitta" },
  { name: "Miele" },
  { name: "Nespresso" },
  { name: "Philips" },
  { name: "Piramit" },
  { name: "Rancilio" },
  { name: "Rowenta" },
  { name: "SPINEL" },
  { name: "Saeco" },
  { name: "Scarlett" },
  { name: "Schaerer" },
  { name: "Severin" },
  { name: "Siemens" },
  { name: "Tefal" },
  { name: "UNIT" },
  { name: "Vitek" },
  { name: "Waeco" },
  { name: "Zelmer" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const CoffeeMaker = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default CoffeeMaker;
