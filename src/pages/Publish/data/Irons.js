import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "Alpina" },
  { name: "Ariete" },
  { name: "Atlanta" },
  { name: "Aurora" },
  { name: "Binatone" },
  { name: "Bork" },
  { name: "Bosch" },
  { name: "Braun" },
  { name: "Clatronic" },
  { name: "Daewoo" },
  { name: "Delfa" },
  { name: "Delonghi" },
  { name: "Elect" },
  { name: "Elbee" },
  { name: "Electrolux" },
  { name: "Energy" },
  { name: "Eurometalnova" },
  { name: "First" },
  { name: "Gorenje" },
  { name: "Home-Element" },
  { name: "Irit" },
  { name: "Kenwood" },
  { name: "Kia" },
  { name: "Lelit" },
  { name: "Magnit" },
  { name: "Marta" },
  { name: "Maxima" },
  { name: "Maxwell" },
  { name: "Morphy Richards" },
  { name: "Moulinex" },
  { name: "Orion" },
  { name: "Panasonic" },
  { name: "Philips" },
  { name: "Polaris" },
  { name: "Redmond" },
  { name: "Rolsen" },
  { name: "Rowenta" },
  { name: "Saturn" },
  { name: "Scarlett" },
  { name: "Severin" },
  { name: "Siemens" },
  { name: "Supra" },
  { name: "Tefal" },
  { name: "UNIT" },
  { name: "VES" },
  { name: "Viconte" },
  { name: "Vitek" },
  { name: "Vitesse" },
  { name: "WEST" },
  { name: "Wellton" },
  { name: "Zelmer" },
  { name: "Ладомир" },
  { name: "Рубин" },
  { name: "Фея" },
  { name: "Artel" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const Irons = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default Irons;
