import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "Alpari" },
  { name: "Alpina" },
  { name: "Ariete" },
  { name: "BEKO" },
  { name: "Belson" },
  { name: "Benten" },
  { name: "Billeo" },
  { name: "Binatone" },
  { name: "Bomann" },
  { name: "Bork" },
  { name: "Clatronic" },
  { name: "Daewoo" },
  { name: "Delfa" },
  { name: "Delonghi" },
  { name: "Dex" },
  { name: "ETA" },
  { name: "Elbee" },
  { name: "Electrolux" },
  { name: "Elenberg" },
  { name: "Erisson" },
  { name: "First" },
  { name: "Gelberk" },
  { name: "Kenwood" },
  { name: "Kia" },
  { name: "LG" },
  { name: "Liberton" },
  { name: "Maxima" },
  { name: "Moulinex" },
  { name: "Novex" },
  { name: "Orion" },
  { name: "Panasonic" },
  { name: "Philips" },
  { name: "Rolsen" },
  { name: "Rotex" },
  { name: "Saturn" },
  { name: "Severin" },
  { name: "Smile" },
  { name: "Supra" },
  { name: "Tefal" },
  { name: "Trisa" },
  { name: "VR" },
  { name: "Vimar" },
  { name: "Vitesse" },
  { name: "WEST" },
  { name: "Zelmer" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const BreadMakers = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default BreadMakers;
