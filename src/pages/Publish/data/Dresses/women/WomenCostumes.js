import React from "react";
import Options from "../../../components/Options.js";
import Select from "../../../components/Select.js";
import {
  womenDressColor,
  intSize,
  season,
  womenCostumeStyle,
  womenCostumeMaterial,
  womenCostumePattern,
  womenBrand,
} from "../datas.js";

const WomenCostumes = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Select
        name={"view"}
        title={"Вид"}
        firstValue={"double"}
        secondValue={"triple"}
        firstDisplay={"Двойка"}
        secondDisplay={"Тройка"}
      />
      <Options itemName={"style"} title={"Стиль"} items={womenCostumeStyle} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenCostumeMaterial}
      />
      <Options
        itemName={"pattern"}
        title={"Узор"}
        items={womenCostumePattern}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
    </div>
  );
};

export default WomenCostumes;
