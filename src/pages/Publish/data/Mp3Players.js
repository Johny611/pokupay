import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "ACME" },
  { name: "Akai" },
  { name: "Apacer" },
  { name: "Archos" },
  { name: "Assistant" },
  { name: "BBK" },
  { name: "Canyon" },
  { name: "Cowon" },
  { name: "Creative" },
  { name: "Daewoo" },
  { name: "Dainet" },
  { name: "DaZed" },
  { name: "DITECH" },
  { name: "Ergo" },
  { name: "Erisson" },
  { name: "Espada" },
  { name: "Explay" },
  { name: "FunTwist" },
  { name: "Genius" },
  { name: "GETHAP" },
  { name: "GRAND" },
  { name: "Intenso" },
  { name: "iPod" },
  { name: "iRiver" },
  { name: "IVORY" },
  { name: "Le-Mon" },
  { name: "MobiBlu" },
  { name: "Packard Bell" },
  { name: "Philips" },
  { name: "Qumo" },
  { name: "Ritmix" },
  { name: "RoverMedia" },
  { name: "R-TOUCH" },
  { name: "Samsung" },
  { name: "Sandisk" },
  { name: "Seekwood" },
  { name: "Sony" },
  { name: "Soundbreeze" },
  { name: "Sweex" },
  { name: "TakeMS" },
  { name: "TEAC" },
  { name: "TeXet" },
  { name: "Transcend" },
  { name: "Treelogic" },
  { name: "WOKSTER" },
  { name: "Zen" },
  { name: "Zoom" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const Mp3Players = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка плеера"} items={brand} />
    </div>
  );
};

export default Mp3Players;
