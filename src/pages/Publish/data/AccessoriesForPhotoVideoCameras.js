import React from "react";
import Options from "../components/Options";

const accessoryType = [
  { name: "bags", rus: "Сумки", eng: "Bags", uzb: "Sumkalar" },
  {
    name: "lightFilters",
    rus: "Светофильтры",
    eng: "Light filters",
    uzb: "Yorug'lik filtrlari",
  },
  {
    name: "chargersBatteries",
    rus: "Зарядные устройства / аккумуляторы",
    eng: "Chargers / Batteries",
    uzb: "Zaryadlovchilar / Batareyalar",
  },
  {
    name: "otherPhotoVideoAccessories",
    rus: "Прочие фото / видеоаксессуары",
    eng: "Other photo / video accessories",
    uzb: "Boshqa foto/video aksessuarlar",
  },
];

const AccessoriesForPhotoVideoCameras = () => {
  return (
    <div>
      {/* Accessories for photo / video cameras */}
      <Options
        itemName={"accessoryType"}
        title={"Аксессуары для фото / видеокамер"}
        items={accessoryType}
      />
    </div>
  );
};

export default AccessoriesForPhotoVideoCameras;
