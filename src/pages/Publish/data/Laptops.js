import React from "react";
import Options from "../components/Options";
import Select from "../components/Select";

const diagonal = [
  { name: "till13", rus: 'До 13"', eng: 'Till 13"', uzb: '13" gacha' },
  { name: '13"-14"', rus: '13"-14"', eng: '13"-14"', uzb: '13"-14"' },
  { name: '15"-15.6"', rus: '15"-15.6"', eng: '15"-15.6"', uzb: '15"-15.6"' },
  { name: '16"-17"', rus: '16"-17"', eng: '16"-17"', uzb: '16"-17"' },
  { name: "from18", rus: 'От 18"', eng: 'From 18"', uzb: '18" dan' },
];

const brand = [
  { name: "Acer" },
  { name: "Apple" },
  { name: "Asus" },
  { name: "BenQ" },
  { name: "Bliss" },
  { name: "Compaq" },
  { name: "Dell" },
  { name: "DESTEN" },
  { name: "eMachines" },
  { name: "Fujitsu-Siemens" },
  { name: "GigaByte" },
  { name: "HP" },
  { name: "HTC" },
  { name: "IBM/ThinkPad" },
  { name: "iRU" },
  { name: "Lenovo" },
  { name: "LG" },
  { name: "MSI" },
  { name: "NEC" },
  { name: "Packard Bell" },
  { name: "Panasonic" },
  { name: "RoverBook" },
  { name: "Samsung" },
  { name: "Sony" },
  { name: "Toshiba" },
  { name: "Xiaomi" },
  { name: "VOYO" },
  { name: "Vizio" },
  { name: "Razer" },
  { name: "Microsoft" },
  { name: "Kruger&Matz" },
  { name: "Kiano" },
  { name: "Impression" },
  { name: "GoClever" },
  { name: "Fujitsu" },
  { name: "DreamMachines" },
  { name: "Alienware" },
  { name: "Другая марка" },
];

const Laptops = () => {
  return (
    <div>
      <Select
        title={"В рассрочку"}
        name={"installment"}
        firstValue={"yes"}
        secondValue={"no"}
        firstDisplay={"Да"}
        secondDisplay={"Нет"}
      />
      <Options
        itemName={"diagonal"}
        title={"Диагональ экрана"}
        items={diagonal}
      />
      <Options itemName={"brand"} title={"Марка ноутбука"} items={brand} />
    </div>
  );
};

export default Laptops;
