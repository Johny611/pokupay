import React from "react";
import Options from "../../../components/Options.js";
import {
  womenDressColor,
  womenSportDressMaterial,
  intSize,
  womenBrand,
  season,
  womenSportPattern,
} from "../datas.js";

const Sport = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenSportDressMaterial}
      />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options itemName={"pattern"} title={"Узор"} items={womenSportPattern} />
    </div>
  );
};

export default Sport;
