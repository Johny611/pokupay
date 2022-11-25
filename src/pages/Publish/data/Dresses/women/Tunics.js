import React from "react";
import Options from "../../../components/Options";
import {
  womenBrand,
  size,
  womenDressLength,
  womenDressMaterial,
  womenDressColor,
  womenEveningDressesPattern,
} from "../datas.js";

const Tunics = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={size}
      />
      <Options itemName={"length"} title={"Длина"} items={womenDressLength} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenDressMaterial}
      />
      <Options
        itemName={"pattern"}
        title={"Узор"}
        items={womenEveningDressesPattern}
      />
    </div>
  );
};

export default Tunics;
