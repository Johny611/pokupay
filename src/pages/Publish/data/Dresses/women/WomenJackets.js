import React from "react";
import Options from "../../../components/Options.js";
import {
  womenDressColor,
  intSize,
  womenBrand,
  womenJacketLength,
  womenJacketStyle,
  womenJacketsCut,
  womenJacketsSleeveLength,
  womenJacketPattern,
} from "../datas.js";

const WomenJackets = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"length"} title={"Длина"} items={womenJacketLength} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options itemName={"style"} title={"Стиль"} items={womenJacketStyle} />
      <Options itemName={"cut"} title={"Покрой"} items={womenJacketsCut} />
      <Options
        itemName={"sleeveLength"}
        title={"Длина рукава"}
        items={womenJacketsSleeveLength}
      />
      <Options itemName={"pattern"} title={"Узор"} items={womenJacketPattern} />
    </div>
  );
};

export default WomenJackets;
