import React from "react";
import Options from "../../../components/Options";
import {
  womenDressColor,
  intSize,
  womenLingerieBrand,
  womenHomePattern,
  womenDressLength,
  womenBeachTunicsMaterial,
} from "../datas.js";

const BeachTunics = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenLingerieBrand} />
      <Options itemName={"pattern"} title={"Узор"} items={womenHomePattern} />
      <Options itemName={"length"} title={"Длина"} items={womenDressLength} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenBeachTunicsMaterial}
      />
    </div>
  );
};

export default BeachTunics;
