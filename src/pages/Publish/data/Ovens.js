import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AEG" },
  { name: "Ardo" },
  { name: "Ariston" },
  { name: "BEKO" },
  { name: "Blomberg" },
  { name: "Bompani" },
  { name: "Bosch" },
  { name: "Candy" },
  { name: "Dako (Mabe)" },
  { name: "Delonghi" },
  { name: "Deluxe" },
  { name: "Desany" },
  { name: "Electrolux" },
  { name: "Fratelli Onofri" },
  { name: "Fulgor" },
  { name: "Gorenje" },
  { name: "GRETA" },
  { name: "Hansa" },
  { name: "ILVE" },
  { name: "Indesit" },
  { name: "Kaiser" },
  { name: "Kuppersbusch" },
  { name: "LUXELL" },
  { name: "Miele" },
  { name: "Mora" },
  { name: "Neff" },
  { name: "NORD" },
  { name: "Rainford" },
  { name: "Restart" },
  { name: "Severin" },
  { name: "Siemens" },
  { name: "Simfer" },
  { name: "Smeg" },
  { name: "Vestel" },
  { name: "Vigor" },
  { name: "Whirlpool" },
  { name: "Zanussiv" },
  { name: "Zigmund & Shtain" },
  { name: "Веста" },
  { name: "Газмаш" },
  { name: "Гефест" },
  { name: "ЗВИ" },
  { name: "Идель" },
  { name: "Крона" },
  { name: "Лада" },
  { name: "Мечта" },
  { name: "Нововятка" },
  { name: "Омичка" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const Ovens = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка плиты/печи"} items={brand} />
    </div>
  );
};

export default Ovens;
