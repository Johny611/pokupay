import React from "react";
import Options from "../../components/Options";
import Select from "../../components/Select";
import {
  brand,
  size,
  color,
  menJeansView,
  menJeansDetails,
  season,
  menJeansClasp,
} from "./datas.js";

const MenJeans = () => {
  return (
    <div>
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный / RU)"}
        items={size}
      />
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"color"} title={"Цвет"} items={color} />
      <Options itemName={"view"} title={"Вид"} items={menJeansView} />
      <Options itemName={"details"} title={"Детали"} items={menJeansDetails} />
      <Select
        title={"Длина"}
        name={"length"}
        firstValue={"shortened"}
        secondValue={"standard"}
        firstDisplay={"Укороченные"}
        secondDisplay={"Стандартные"}
      />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options itemName={"clasp"} title={"Застежка"} items={menJeansClasp} />
    </div>
  );
};

export default MenJeans;
