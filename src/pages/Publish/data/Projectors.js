import React from "react";
import Options from "../components/Options";

const types = [
  {
    name: "memoryModules",
    rus: "Модули памяти",
    eng: "Memory modules",
    uzb: "Xotira modullari",
  },
  {
    name: "videoCards",
    rus: "Видеокарты",
    eng: "Video cards",
    uzb: "Video kartalar",
  },
  {
    name: "soundCards",
    rus: "Звуковые карты",
    eng: "Sound cards",
    uzb: "Ovoz kartalari",
  },
  {
    name: "motherboards",
    rus: "Материнские платы",
    eng: "Motherboards",
    uzb: "Platalar",
  },
  {
    name: "ppticalDrives",
    rus: "Оптические приводы",
    eng: "Optical drives",
    uzb: "Optik drayvlar",
  },
  {
    name: "hardDrives",
    rus: "Жесткие диски",
    eng: "Hard drives",
    uzb: "Qattiq disklar",
  },
  { name: "frame", rus: "Корпуса", eng: "Frame", uzb: "Korpus" },
  {
    name: "processors",
    rus: "Процессоры",
    eng: "Processors",
    uzb: "Protsessorlar",
  },
  {
    name: "TVTuners",
    rus: "ТВ-тюнеры",
    eng: "TV tuners",
    uzb: "Televizor tyunerlari",
  },
  {
    name: "powerSupplies",
    rus: "Блоки питания",
    eng: "Power supplies",
    uzb: "Quvvat manbalari",
  },
  {
    name: "otherAccessories",
    rus: "Прочие комплектующие",
    eng: "Other accessories",
    uzb: "Boshqa aksessuarlar",
  },
];

const Projectors = () => {
  return (
    <div>
      <Options itemName={"type"} title={"Типы комплектующих"} items={types} />
    </div>
  );
};

export default Projectors;
