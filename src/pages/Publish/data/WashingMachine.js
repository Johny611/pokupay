import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AEG" },
  { name: "Akai" },
  { name: "Ardo" },
  { name: "Ariston" },
  { name: "Asko" },
  { name: "Bauknecht" },
  { name: "BEKO" },
  { name: "Blomberg" },
  { name: "Bompani" },
  { name: "Bosch" },
  { name: "Brandt" },
  { name: "Candy" },
  { name: "Daewoo" },
  { name: "Desany" },
  { name: "Electrolux" },
  { name: "Euronova" },
  { name: "Eurosoba" },
  { name: "Fagor" },
  { name: "Frigidaire" },
  { name: "Gaggenau" },
  { name: "General Electric" },
  { name: "Gorenje" },
  { name: "Hansa" },
  { name: "Hoover" },
  { name: "Indesit" },
  { name: "Kaiser" },
  { name: "Kuppersbusch" },
  { name: "LG" },
  { name: "Maytag" },
  { name: "Miele" },
  { name: "Neff" },
  { name: "Philco" },
  { name: "Polar" },
  { name: "Rolsen" },
  { name: "Samsung" },
  { name: "SCHULTHESS" },
  { name: "Siemens" },
  { name: "Siltal" },
  { name: "Skiff" },
  { name: "Smeg" },
  { name: "Teka" },
  { name: "Vestel" },
  { name: "Whirlpool" },
  { name: "Zanussi" },
  { name: "Zerowatt" },
  { name: "Атлант" },
  { name: "Вятка" },
  { name: "Ока" },
  { name: "Фея" },
  { name: "Artel" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const WashingMachine = () => {
  return (
    <div>
      <Options
        itemName={"brand"}
        title={"Марка стиральной машины"}
        items={brand}
      />
    </div>
  );
};

export default WashingMachine;
