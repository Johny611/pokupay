import React from "react";
import Options from "../components/Options";

const brands = [
  { name: "Aiptek", rus: "Aiptek", eng: "Aiptek", uzb: "Aiptek" },
  { name: "Canon", rus: "Canon", eng: "Canon", uzb: "Canon" },
  { name: "DXG", rus: "DXG", eng: "DXG", uzb: "DXG" },
  { name: "Direc", rus: "Direc", eng: "Direc", uzb: "Direc" },
  { name: "Elmo", rus: "Elmo", eng: "Elmo", uzb: "Elmo" },
  { name: "Espada", rus: "Espada", eng: "Espada", uzb: "Espada" },
  { name: "Explay", rus: "Explay", eng: "Explay", uzb: "Explay" },
  {
    name: "Flip Video",
    rus: "Flip Video",
    eng: "Flip Video",
    uzb: "Flip Video",
  },
  { name: "Genius", rus: "Genius", eng: "Genius", uzb: "Genius" },
  { name: "Hitachi", rus: "Hitachi", eng: "Hitachi", uzb: "Hitachi" },
  { name: "iSpan", rus: "iSpan", eng: "iSpan", uzb: "iSpan" },
  { name: "JVC", rus: "JVC", eng: "JVC", uzb: "JVC" },
  { name: "Kodak", rus: "Kodak", eng: "Kodak", uzb: "Kodak" },
  { name: "Panasonic", rus: "Panasonic", eng: "Panasonic", uzb: "Panasonic" },
  { name: "Praktica", rus: "Praktica", eng: "Praktica", uzb: "Praktica" },
  { name: "Rovershot", rus: "Rovershot", eng: "Rovershot", uzb: "Rovershot" },
  { name: "Samsung", rus: "Samsung", eng: "Samsung", uzb: "Samsung" },
  { name: "Sanyo", rus: "Sanyo", eng: "Sanyo", uzb: "Sanyo" },
  { name: "Sony", rus: "Sony", eng: "Sony", uzb: "Sony" },
  { name: "Toshiba", rus: "Toshiba", eng: "Toshiba", uzb: "Toshiba" },
  { name: "GoPro", rus: "GoPro", eng: "GoPro", uzb: "GoPro" },
  { name: "Xiaomi", rus: "Xiaomi", eng: "Xiaomi", uzb: "Xiaomi" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const VideoCameras = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка видеокамеры"} items={brands} />
    </div>
  );
};

export default VideoCameras;
