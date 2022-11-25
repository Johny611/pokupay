import React from "react";
import Options from "../../../components/Options";
import {
  womenBrand,
  size,
  womenTshirtsView,
  womenTshirtsPattern,
  womenDressMaterial,
  womenDressColor,
} from "../datas.js";

const Tshirts = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={size}
      />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenDressMaterial}
      />
      <Options itemName={"view"} title={"Вид"} items={womenTshirtsView} />
      <Options
        itemName={"pattern"}
        title={"Узор"}
        items={womenTshirtsPattern}
      />
    </div>
  );
};

export default Tshirts;
