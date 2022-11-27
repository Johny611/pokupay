import React from "react";
import Options from "../../../components/Options";
import {
  womenDressColor,
  womenHomeMaterial,
  intSize,
  womenBrand,
  season,
  womenHomePattern,
} from "../datas.js";

const HomeDress = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenHomeMaterial}
      />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options itemName={"pattern"} title={"Узор"} items={womenHomePattern} />
    </div>
  );
};

export default HomeDress;
