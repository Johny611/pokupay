import React from "react";
import Options from "../../components/Options";
import Select from "../../components/Select";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../../features/publishSlice";
import { Input } from "@material-tailwind/react";
import {
  pattern,
  material,
  sleeve,
  size,
  color,
  season,
  brand,
  clasp,
} from "./datas.js";

const Sweatshirt = () => {
  const dispatch = useDispatch();

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <Options itemName={"pattern"} title={"Узор"} items={pattern} />
      <Options itemName={"material"} title={"Материал"} items={material} />
      <Options itemName={"sleeve"} title={"Рукав"} items={sleeve} />
      <Select
        title={"Длина рукава"}
        name={"sleeveLength"}
        firstValue={"long"}
        secondValue={"short"}
        firstDisplay={"Длинный"}
        secondDisplay={"Короткий"}
      />
      <div>
        <Input
          name="size"
          onChange={addPublishData}
          color="orange"
          variant="standard"
          label="Размер"
        />
      </div>
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный/RU)"}
        items={size}
      />
      <Options itemName={"color"} title={"Цвет"} items={color} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"clasp"} title={"Застежка"} items={clasp} />
    </div>
  );
};

export default Sweatshirt;
