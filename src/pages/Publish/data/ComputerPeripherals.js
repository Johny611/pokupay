import React from "react";
import Options from "../components/Options";

const subCategory = [
  {
    name: "keyboards/mouse/manipulators",
    rus: "Клавиатуры / мыши / манипуляторы",
    eng: "Keyboards / mouse / manipulators",
    uzb: "Klaviaturalar / sichqonlar / manipulyatorlar",
  },
  { name: "webcams", rus: "Вебкамеры", eng: "Webcams", uzb: "Veb-kameralar" },
  {
    name: "computerAcoustics",
    rus: "Компьютерная акустика",
    eng: "Computer acoustics",
    uzb: "Kompyuter akustikasi",
  },
  { name: "printers", rus: "Принтеры", eng: "Printers", uzb: "Printerlar" },
  { name: "MFP", rus: "Мфу", eng: "MFP", uzb: "MFP" },
  { name: "scanners", rus: "Сканеры", eng: "Scanners", uzb: "Skanerlar" },
  {
    name: "copiers",
    rus: "Копиры",
    eng: "Copiers",
    uzb: "Nusxa ko'chirish mashinalari",
  },
  {
    name: "networkHardware",
    rus: "Сетевое оборудование",
    eng: "Network hardware",
    uzb: "Tarmoq apparati",
  },
  {
    name: "otherPeripherals",
    rus: "Прочие периферийные устройства",
    eng: "Other peripherals",
    uzb: "Boshqa tashqi qurilmalar",
  },
];

const ComputerPeripherals = () => {
  return (
    <div>
      <Options
        itemName={"peripheralCategory"}
        title={"Подкатегории"}
        items={subCategory}
      />
    </div>
  );
};

export default ComputerPeripherals;
