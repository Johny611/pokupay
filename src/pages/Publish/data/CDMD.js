import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "Atoll Electronique" },
  { name: "AVM" },
  { name: "Accuphase" },
  { name: "Advance Acoustic" },
  { name: "April Music" },
  { name: "Arcam" },
  { name: "Audio Analogue" },
  { name: "Audio Research" },
  { name: "Ayon Audio" },
  { name: "BlueNote" },
  { name: "Burmester" },
  { name: "C.E.C." },
  { name: "Cambridge Audio" },
  { name: "Cary Audio" },
  { name: "Creek" },
  { name: "Cyrus" },
  { name: "Denon" },
  { name: "Densen" },
  { name: "dCS" },
  { name: "Electrocompaniet" },
  { name: "Exposure" },
  { name: "Gemini" },
  { name: "Harman/Kardon" },
  { name: "Marantz" },
  { name: "McIntosh" },
  { name: "Meridian" },
  { name: "Micromega" },
  { name: "Monrio" },
  { name: "Musical Fidelity" },
  { name: "Myryad" },
  { name: "NAD" },
  { name: "Nagra" },
  { name: "Naim Audio" },
  { name: "Numark" },
  { name: "Onkyo" },
  { name: "Original Electronics" },
  { name: "Perreaux" },
  { name: "Pioneer" },
  { name: "Primare" },
  { name: "Quad" },
  { name: "Raysonic" },
  { name: "Rega" },
  { name: "Roksan" },
  { name: "Rotel" },
  { name: "Sherwood" },
  { name: "Sim Audio" },
  { name: "Sony" },
  { name: "Stanton" },
  { name: "T+A" },
  { name: "TEAC" },
  { name: "Tangent" },
  { name: "Tascam" },
  { name: "Unison Research" },
  { name: "Vincent" },
  { name: "Wadia" },
  { name: "YBA" },
  { name: "Yamaha" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const CDMD = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default CDMD;
