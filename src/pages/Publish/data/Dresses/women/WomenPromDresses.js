import React from "react";
import Options from "../../../components/Options";
import {
  womenBrand,
  size,
  womenDressDetails,
  womenDressLength,
  womenSleeveLength,
  womenDressMaterial,
  womenDressStyle,
  season,
  womenDressColor,
  womenEveningDressesPattern,
} from "../datas.js";

const WomenPromDresses = () => {
  return (
    <div>
      <Options
        itemName={"pattern"}
        title={"Узор"}
        items={womenEveningDressesPattern}
      />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={size}
      />
      <Options
        itemName={"sleeveLength"}
        title={"Длина рукава"}
        items={womenSleeveLength}
      />
      <Options
        itemName={"details"}
        title={"Детали"}
        items={womenDressDetails}
      />
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options itemName={"length"} title={"Длина"} items={womenDressLength} />
      <Options itemName={"style"} title={"Фасон"} items={womenDressStyle} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenDressMaterial}
      />
    </div>
  );
};

export default WomenPromDresses;
