import React from "react";
import Options from "../components/Options";

const subCategory = [
  {
    name: "wiredTelephones",
    rus: "Проводные телефоны",
    eng: "Wired telephones",
    uzb: "Simli telefonlar",
  },
  {
    name: "radiotelephones",
    rus: "Радиотелефоны",
    eng: "Radiotelephones",
    uzb: "Radiotelefonlar",
  },
  {
    name: "anyCategory",
    rus: "Любая категория",
    eng: "Any category",
    uzb: "Har qanday kategoriya",
  },
];

const Landlines = () => {
  return (
    <div>
      <Options
        itemName={"landlinesCategory"}
        title={"Подкатегории"}
        items={subCategory}
      />
    </div>
  );
};

export default Landlines;
