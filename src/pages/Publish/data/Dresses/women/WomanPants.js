import React from "react";
import Options from "../../../components/Options.js";
import {
  womenPants,
  intSize,
  womenJeansLength,
  womenShortsLanding,
  womenDressColor,
  womenBrand,
  womenPantsPattern,
  womenPantsMaterial,
  menJeansClasp,
  season,
} from "../datas.js";

const WomanPants = () => {
  return (
    <div>
      <Options itemName={"decor"} title={"Декор"} items={womenPants} />
      <Options
        itemName={"size"}
        title={"Размер (W / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"length"} title={"Длина"} items={womenJeansLength} />
      <Options
        itemName={"landing"}
        title={"Посадка"}
        items={womenShortsLanding}
      />
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options itemName={"pattern"} title={"Узор"} items={womenPantsPattern} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenPantsMaterial}
      />
      <Options itemName={"clasp"} title={"Застежка"} items={menJeansClasp} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
    </div>
  );
};

export default WomanPants;
