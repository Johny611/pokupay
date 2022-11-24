import React from "react";
import Options from "../../components/Options";
import { brand, color } from "./datas.js";

const Undershirt = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"color"} title={"Цвет"} items={color} />
    </div>
  );
};

export default Undershirt;
