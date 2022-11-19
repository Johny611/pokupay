import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "Canon", rus: "Canon", eng: "Canon", uzb: "Canon" },
  { name: "Elicar", rus: "Elicar", eng: "Elicar", uzb: "Elicar" },
  { name: "Leica", rus: "Leica", eng: "Leica", uzb: "Leica" },
  { name: "Lensbaby", rus: "Lensbaby", eng: "Lensbaby", uzb: "Lensbaby" },
  { name: "Mamiya", rus: "Mamiya", eng: "Mamiya", uzb: "Mamiya" },
  { name: "Nikon", rus: "Nikon", eng: "Nikon", uzb: "Nikon" },
  { name: "Olympus", rus: "Olympus", eng: "Olympus", uzb: "Olympus" },
  { name: "Panasonic", rus: "Panasonic", eng: "Panasonic", uzb: "Panasonic" },
  { name: "Pentax", rus: "Pentax", eng: "Pentax", uzb: "Pentax" },
  { name: "Sigma", rus: "Sigma", eng: "Sigma", uzb: "Sigma" },
  { name: "Sony", rus: "Sony", eng: "Sony", uzb: "Sony" },
  { name: "Tamron", rus: "Tamron", eng: "Tamron", uzb: "Tamron" },
  { name: "Tokina", rus: "Tokina", eng: "Tokina", uzb: "Tokina" },
  { name: "Zeiss", rus: "Zeiss", eng: "Zeiss", uzb: "Zeiss" },
  { name: "Зенит", rus: "Зенит", eng: "Зенит", uzb: "Зенит" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const LensCameras = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка объектива"} items={brand} />
    </div>
  );
};

export default LensCameras;
