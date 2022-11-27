import React from "react";
import Options from "../../../components/Options";
import Select from "../../../components/Select";
import {
  womenBrand,
  size,
  season,
  menJeansClasp,
  womenTshirtsPattern,
  womenShirtsMaterial,
  womenDressColor,
  sweatersDetails,
  sleeve,
} from "../datas.js";

const Sweaters = () => {
  return (
    <div>
      <Select
        name={"length"}
        title={"Длина"}
        firstValue={"long"}
        secondValue={"short"}
        firstDisplay={"Длинные"}
        secondDisplay={"Короткие"}
      />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={size}
      />
      <Options
        itemName={"pattern"}
        title={"Узор"}
        items={womenTshirtsPattern}
      />
      <Options itemName={"details"} title={"Детали"} items={sweatersDetails} />
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options
        itemName={"sleeveLength"}
        title={"Длина рукава"}
        items={sleeve}
      />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenShirtsMaterial}
      />
      <Options itemName={"clasp"} title={"Застежка"} items={menJeansClasp} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
    </div>
  );
};

export default Sweaters;
