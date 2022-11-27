import React from "react";
import {
  womenSkirtsPattern,
  womenDressColor,
  womenBrand,
  womenSkirtsStyle,
  womenDressLength,
  size,
  womenSkirtMaterial,
  womenSkirtsDetails,
  womenSkirtsTexture,
  womenSkirtsClasp,
  season,
  womenSkirtsDecor,
} from "../datas.js";
import Select from "../../../components/Select";
import Options from "../../../components/Options";

const Skirts = () => {
  return (
    <div>
      <Options itemName={"pattern"} title={"Узор"} items={womenSkirtsPattern} />
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options itemName={"style"} title={"Стиль"} items={womenSkirtsStyle} />
      <Options itemName={"length"} title={"Длина"} items={womenDressLength} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={size}
      />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenSkirtMaterial}
      />
      <Options
        itemName={"details"}
        title={"Детали"}
        items={womenSkirtsDetails}
      />
      <Options
        itemName={"texture"}
        title={"Фактура"}
        items={womenSkirtsTexture}
      />
      <Options itemName={"clasp"} title={"Застежка"} items={womenSkirtsClasp} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Select
        name={"cut"}
        title={"Покрой"}
        firstValue={"direct"}
        secondValue={"fitted"}
        firstDisplay={"Прямые"}
        secondDisplay={"Приталенные"}
      />
      <Options itemName={"decor"} title={"Декор"} items={womenSkirtsDecor} />
    </div>
  );
};

export default Skirts;
