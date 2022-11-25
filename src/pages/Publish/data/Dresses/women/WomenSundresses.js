import React from "react";
import Options from "../../../components/Options";
import {
  womenBrand,
  size,
  womenDressDetails,
  womenDressLength,
  womenDressMaterial,
  womenDressColor,
  womenEveningDressesPattern,
} from "../datas.js";

const WomenSundresses = () => {
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
      <Options
        itemName={"details"}
        title={"Детали"}
        items={womenDressDetails}
      />
    </div>
  );
};

export default WomenSundresses;
