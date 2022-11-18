import React from "react";
import Options from "../components/Options";

const brands = [
  { name: "Agfaphoto", rus: "Agfaphoto", eng: "Agfaphoto", uzb: "Agfaphoto" },
  { name: "BBK", rus: "BBK", eng: "BBK", uzb: "BBK" },
  { name: "BenQ", rus: "BenQ", eng: "BenQ", uzb: "BenQ" },
  { name: "Canon", rus: "Canon", eng: "Canon", uzb: "Canon" },
  { name: "Casio", rus: "Casio", eng: "Casio", uzb: "Casio" },
  { name: "Ergo", rus: "Ergo", eng: "", uzb: "" },
  { name: "Fujifilm", rus: "Fujifilm", eng: "Fujifilm", uzb: "Fujifilm" },
  {
    name: "General Electric",
    rus: "General Electric",
    eng: "General Electric",
    uzb: "General Electric",
  },
  { name: "Genius", rus: "Genius", eng: "Genius", uzb: "Genius" },
  {
    name: "Hasselblad",
    rus: "Hasselblad",
    eng: "Hasselblad",
    uzb: "Hasselblad",
  },
  { name: "HP", rus: "HP", eng: "HP", uzb: "HP" },
  { name: "Leica", rus: "Leica", eng: "Leica", uzb: "Leica" },
  { name: "Mamiya", rus: "Mamiya", eng: "Mamiya", uzb: "Mamiya" },
  { name: "Nikon", rus: "Nikon", eng: "Nikon", uzb: "Nikon" },
  { name: "Olympus", rus: "Olympus", eng: "Olympus", uzb: "Olympus" },
  { name: "Panasonic", rus: "Panasonic", eng: "Panasonic", uzb: "Panasonic" },
  { name: "Pentax", rus: "Pentax", eng: "Pentax", uzb: "Pentax" },
  { name: "Polaroid", rus: "Polaroid", eng: "Polaroid", uzb: "Polaroid" },
  { name: "Praktica", rus: "Praktica", eng: "Praktica", uzb: "Praktica" },
  { name: "Premier", rus: "Premier", eng: "Premier", uzb: "Premier" },
  { name: "Rekam", rus: "Rekam", eng: "Rekam", uzb: "Rekam" },
  { name: "Ricoh", rus: "Ricoh", eng: "Ricoh", uzb: "Ricoh" },
  { name: "Rollei", rus: "Rollei", eng: "Rollei", uzb: "Rollei" },
  { name: "Rovershot", rus: "Rovershot", eng: "Rovershot", uzb: "Rovershot" },
  { name: "Samsung", rus: "Samsung", eng: "Samsung", uzb: "Samsung" },
  { name: "Sanyo", rus: "Sanyo", eng: "Sanyo", uzb: "Sanyo" },
  { name: "Sealife", rus: "Sealife", eng: "Sealife", uzb: "Sealife" },
  { name: "Sigma", rus: "Sigma", eng: "Sigma", uzb: "Sigma" },
  { name: "Sony", rus: "Sony", eng: "Sony", uzb: "Sony" },
  { name: "UFO", rus: "UFO", eng: "UFO", uzb: "UFO" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const DigitalCameras = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка фотоаппарата"} items={brands} />
    </div>
  );
};

export default DigitalCameras;
