import React from "react";
import Options from "../components/Options";

const subCategory = [
  {
    name: "accumulatorsAndPortableBatteries",
    rus: "Аккумуляторы и портативные батареи",
    eng: "Accumulators and portable batteries",
    uzb: "Akkumulyatorlar va portativ batareyalar",
  },
  {
    name: "chargersAndDockingStations",
    rus: "Зарядные устройства и док-станции",
    eng: "Chargers and docking stations",
    uzb: "Zaryadlovchilar va ulash stansiyalari",
  },
  { name: "headsets", rus: "Гарнитуры", eng: "Headsets", uzb: "Naushniklar" },
  {
    name: "enclosures/panels",
    rus: "Корпуса / панели",
    eng: "Enclosures / panels",
    uzb: "Korpuslar / panellar",
  },
  { name: "cases", rus: "Чехлы", eng: "Cases", uzb: "Chexollar" },
  {
    name: "dataCables",
    rus: "Data-кабели",
    eng: "Data cables",
    uzb: "Ma'lumot kabellari",
  },
  {
    name: "otherPhoneAccessories",
    rus: "Прочие аксессуары для телефонов",
    eng: "Other phone accessories",
    uzb: "Boshqa telefon aksessuarlari",
  },
  {
    name: "memoryC ards",
    rus: "Карты памяти",
    eng: "Memory cards",
    uzb: "Xotira kartalari",
  },
  {
    name: "protectiveFilmsAndGlasses",
    rus: "Защитные пленки и стекла",
    eng: "Protective films and glasses",
    uzb: "Himoya plyonkalari va ko'zoynaklar",
  },
  {
    name: "selfieMonopods",
    rus: "Моноподы для селфи",
    eng: "Selfie monopods",
    uzb: "Selfi monopodlari",
  },
  {
    name: "virtualRealityGlasses",
    rus: "Очки виртуальной реальности",
    eng: "Virtual reality glasses",
    uzb: "Virtual haqiqat ko'zoynaklari",
  },
  {
    name: "smartWatches",
    rus: "Смарт часы",
    eng: "Smart watches",
    uzb: "Aqlli soat",
  },
  {
    name: "fitnessTrackers",
    rus: "Фитнес-трекеры",
    eng: "Fitness trackers",
    uzb: "Fitness kuzatuvchilari",
  },
];

const PhoneAccessories = () => {
  return (
    <div>
      <Options
        itemName={"accessoryType"}
        title={"Подкатегории"}
        items={subCategory}
      />
    </div>
  );
};

export default PhoneAccessories;
