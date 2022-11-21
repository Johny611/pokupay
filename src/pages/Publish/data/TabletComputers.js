import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "3Q" },
  { name: "Acer" },
  { name: "Ainol" },
  { name: "Apple" },
  { name: "Assistant" },
  { name: "ASUS" },
  { name: "BRAVIS" },
  { name: "Chuwi" },
  { name: "Cube" },
  { name: "Fly" },
  { name: "Globex" },
  { name: "GOCLEVER" },
  { name: "Huawei" },
  { name: "Impression" },
  { name: "Jeka" },
  { name: "Lenovo" },
  { name: "LG" },
  { name: "Nomi" },
  { name: "Pipo" },
  { name: "PocketBook" },
  { name: "Prestigio" },
  { name: "Samsung" },
  { name: "Sony" },
  { name: "Xiaomi" },
  { name: "Другая марка", rus: "", eng: "", uzb: "" },
];

const TabletComputers = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка планшета"} items={brand} />
    </div>
  );
};

export default TabletComputers;
