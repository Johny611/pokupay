import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AOC", rus: "AOC", eng: "AOC", uzb: "AOC" },
  { name: "ASUS", rus: "ASUS", eng: "ASUS", uzb: "ASUS" },
  { name: "Acer", rus: "Acer", eng: "Acer", uzb: "Acer" },
  { name: "Apple", rus: "Apple", eng: "Apple", uzb: "Apple" },
  { name: "BenQ", rus: "BenQ", eng: "BenQ", uzb: "BenQ" },
  { name: "DELL", rus: "DELL", eng: "DELL", uzb: "DELL" },
  { name: "Eizo", rus: "Eizo", eng: "Eizo", uzb: "Eizo" },
  { name: "Envision", rus: "Envision", eng: "Envision", uzb: "Envision" },
  {
    name: "Fujitsu-Siemens",
    rus: "Fujitsu-Siemens",
    eng: "Fujitsu-Siemens",
    uzb: "Fujitsu-Siemens",
  },
  { name: "HP", rus: "HP", eng: "HP", uzb: "HP" },
  { name: "Hanns.G", rus: "Hanns.G", eng: "Hanns.G", uzb: "Hanns.G" },
  { name: "Hyundai", rus: "Hyundai", eng: "Hyundai", uzb: "Hyundai" },
  { name: "liyama", rus: "liyama", eng: "liyama", uzb: "liyama" },
  { name: "LG", rus: "LG", eng: "LG", uzb: "LG" },
  { name: "Lenovo", rus: "Lenovo", eng: "Lenovo", uzb: "Lenovo" },
  { name: "MAG", rus: "MAG", eng: "MAG", uzb: "MAG" },
  { name: "NEC", rus: "NEC", eng: "NEC", uzb: "NEC" },
  { name: "Neovo", rus: "Neovo", eng: "Neovo", uzb: "Neovo" },
  { name: "Philips", rus: "Philips", eng: "Philips", uzb: "Philips" },
  { name: "Prestigio", rus: "Prestigio", eng: "Prestigio", uzb: "Prestigio" },
  { name: "Proview", rus: "Proview", eng: "Proview", uzb: "Proview" },
  { name: "Samsung", rus: "Samsung", eng: "Samsung", uzb: "Samsung" },
  { name: "Sony", rus: "Sony", eng: "Sony", uzb: "Sony" },
  { name: "Topview", rus: "Topview", eng: "Topview", uzb: "Topview" },
  { name: "Toshiba", rus: "Toshiba", eng: "Toshiba", uzb: "Toshiba" },
  { name: "Viewsonic", rus: "Viewsonic", eng: "Viewsonic", uzb: "Viewsonic" },
  { name: "other", rus: "Другое", eng: "Other", uzb: "Boshqa" },
];

const Monitors = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка монитора"} items={brand} />
    </div>
  );
};

export default Monitors;
