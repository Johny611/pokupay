import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "Alpina" },
  { name: "Ariete" },
  { name: "Atlanta" },
  { name: "Aurora" },
  { name: "BEKO" },
  { name: "Binatone" },
  { name: "Bork" },
  { name: "Bosch" },
  { name: "Braun" },
  { name: "Clatronic" },
  { name: "Daewoo" },
  { name: "Elekta" },
  { name: "Elenberg" },
  { name: "Irit" },
  { name: "Kenwood" },
  { name: "Kia" },
  { name: "Krups" },
  { name: "Lamarque" },
  { name: "Magimix" },
  { name: "Marta" },
  { name: "Morphy Richards" },
  { name: "Moulinex" },
  { name: "Mystery" },
  { name: "Orion" },
  { name: "Philips" },
  { name: "Polaris" },
  { name: "Rainford" },
  { name: "Redmond" },
  { name: "Rolsen" },
  { name: "Rotel" },
  { name: "Saturn" },
  { name: "Scarlett" },
  { name: "Severin" },
  { name: "Siemens" },
  { name: "Supra" },
  { name: "Tefal" },
  { name: "VES" },
  { name: "Viconte" },
  { name: "Vitek" },
  { name: "Vitesse" },
  { name: "WEST" },
  { name: "WS Invention" },
  { name: "Zauber" },
  { name: "Zelmer" },
  { name: "Ладомир" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const FoodProcessorsChoppers = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default FoodProcessorsChoppers;
