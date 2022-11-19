import React from "react";
import Options from "../components/Options";

const componentTypes = [
  {
    name: "otherAccessories",
    rus: "Прочие комплектующие",
    eng: "Other accessories",
    uzb: "Boshqa aksessuarlar",
  },
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
    name: "opticalDrives",
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
  { name: "frames", rus: "Корпуса", eng: "Frames", uzb: "Korpus" },
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
];

const ComputerComponents = () => {
  return (
    <div>
      <Options
        itemName={"componentTypes"}
        title={"Типы комплектующих"}
        items={componentTypes}
      />
    </div>
  );
};

export default ComputerComponents;
