import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "AstraLux" },
  { name: "Aurora" },
  { name: "Boutique" },
  { name: "Bernina" },
  { name: "Brother" },
  { name: "Dragon Fly" },
  { name: "Elna" },
  { name: "Family" },
  { name: "Husqvarna" },
  { name: "Jaguar" },
  { name: "Janome" },
  { name: "Juki" },
  { name: "Leader" },
  { name: "New Home" },
  { name: "Pfaff" },
  { name: "Profi" },
  { name: "Singer" },
  { name: "Toyota" },
  { name: "Veritas" },
  { name: "Yamata" },
  { name: "other ", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const SewingMachines = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка"} items={brand} />
    </div>
  );
};

export default SewingMachines;
