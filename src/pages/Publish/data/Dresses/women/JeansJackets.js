import React from "react";
import Options from "../../../components/Options";
import Select from "../../../components/Select";
import {
  womenDressColor,
  length,
  size,
  coatSeason,
  cut,
  insulation,
  womenBrand,
} from "../datas.js";

const JeansJackets = () => {
  return (
    <div>
      <Select
        name={"hood"}
        title={"Капюшон"}
        firstValue={"yes"}
        secondValue={"no"}
        firstDisplay={"Есть"}
        secondDisplay={"Нет"}
      />
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"length"} title={"Длина"} items={length} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={size}
      />
      <Options itemName={"season"} title={"Сезон"} items={coatSeason} />
      <Options itemName={"cut"} title={"Покрой"} items={cut} />
      <Options
        itemName={"insulation"}
        title={"Утеплитель"}
        items={insulation}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
    </div>
  );
};

export default JeansJackets;
