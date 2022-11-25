import React from "react";
import Options from "../../../components/Options";
import { womenBrand, size, womenDressColor } from "../datas.js";

const Bodysuit = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={size}
      />
    </div>
  );
};

export default Bodysuit;
