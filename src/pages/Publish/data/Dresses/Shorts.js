import React from "react";
import Options from "../../components/Options";
import {
  brand,
  size,
  shortsLength,
  color,
  shortsMaterial,
  shortView,
  pattern,
} from "./datas.js";

const Shorts = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"color"} title={"Цвет"} items={color} />
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный / RU)"}
        items={size}
      />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={shortsMaterial}
      />
      <Options itemName={"view"} title={"Вид"} items={shortView} />
      <Options itemName={"pattern"} title={"Узор"} items={pattern} />
      <Options itemName={"length"} title={"Длина"} items={shortsLength} />
    </div>
  );
};

export default Shorts;
