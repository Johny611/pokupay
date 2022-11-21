import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AEG" },
  { name: "Alpina" },
  { name: "Ariete" },
  { name: "Atlanta" },
  { name: "Binatone" },
  { name: "Blomberg" },
  { name: "Bomann" },
  { name: "Bork" },
  { name: "Bosch" },
  { name: "Braun" },
  { name: "Cameron" },
  { name: "Clatronic" },
  { name: "Daewoo" },
  { name: "De Dietrich" },
  { name: "Elbee" },
  { name: "Elenberg" },
  { name: "Energy" },
  { name: "Fagor" },
  { name: "First" },
  { name: "Gaggenau" },
  { name: "Gorenje" },
  { name: "Hotpoint-Ariston" },
  { name: "Imperial" },
  { name: "Irit" },
  { name: "Kenwood" },
  { name: "Kia" },
  { name: "Kuppersbusch" },
  { name: "Lumme" },
  { name: "Magnit" },
  { name: "Marta" },
  { name: "Maxima" },
  { name: "Miele" },
  { name: "Morphy Richards" },
  { name: "Moulinex" },
  { name: "Mystery" },
  { name: "Novex" },
  { name: "Orion" },
  { name: "Philips" },
  { name: "Polaris" },
  { name: "Redmond" },
  { name: "Rolsen" },
  { name: "Saturn" },
  { name: "Scarlett" },
  { name: "Severin" },
  { name: "Siemens" },
  { name: "Smeg" },
  { name: "Smile" },
  { name: "Supra" },
  { name: "Tefal" },
  { name: "Trisa" },
  { name: "Unit" },
  { name: "VES" },
  { name: "VR" },
  { name: "Vitek" },
  { name: "Vitesse" },
  { name: "Zauber" },
  { name: "Zelmer" },
  { name: "Ладомир" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const SteamersMulticookers = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default SteamersMulticookers;
