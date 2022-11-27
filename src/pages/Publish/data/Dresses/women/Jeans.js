import React from "react";
import Options from "../../../components/Options";
import {
  womenDressColor,
  womenJeansDecor,
  menJeansClasp,
  womenShortsLanding,
  womenJeansLength,
  season,
  intSize,
  womenBrand,
} from "../datas.js";

const Jeans = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"decor"} title={"Декор"} items={womenJeansDecor} />
      <Options itemName={"clasp"} title={"Застежка"} items={menJeansClasp} />
      <Options
        itemName={"landing"}
        title={"Посадка"}
        items={womenShortsLanding}
      />
      <Options itemName={"length"} title={"Длина"} items={womenJeansLength} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options
        itemName={"size"}
        title={"Размер (W / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
    </div>
  );
};

export default Jeans;
