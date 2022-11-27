import React from "react";
import Options from "../../../components/Options.js";
import {
  womenDressColor,
  intSize,
  season,
  womenOverallsBottom,
  womenOverallsMaterial,
  womenPantsPattern,
  menJeansClasp,
  womenBrand,
} from "../datas.js";

const WomenOveralls = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options
        itemName={"size"}
        title={"Размер (W / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options itemName={"bottom"} title={"Низ"} items={womenOverallsBottom} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenOverallsMaterial}
      />
      <Options itemName={"pattern"} title={"Узор"} items={womenPantsPattern} />
      <Options itemName={"clasp"} title={"Застежка"} items={menJeansClasp} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
    </div>
  );
};

export default WomenOveralls;
