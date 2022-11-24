import React from "react";
import Options from "../../components/Options";
import Select from "../../components/Select";
import { brand, color, pattern, material } from "./datas.js";

const Shirts = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"color"} title={"Цвет"} items={color} />
      <Options itemName={"pattern"} title={"Узор"} items={pattern} />
      <Options itemName={"material"} title={"Материал"} items={material} />
      <Select
        title={"Длина рукава"}
        name={"sleeveLength"}
        firstValue={"long"}
        secondValue={"short"}
        firstDisplay={"Длинный"}
        secondDisplay={"Короткий"}
      />
    </div>
  );
};

export default Shirts;
