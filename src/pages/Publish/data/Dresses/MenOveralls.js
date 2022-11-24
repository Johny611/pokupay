import React from "react";
import { Input } from "@material-tailwind/react";
import Options from "../../components/Options.js";
import {
  brand,
  color,
  size,
  season,
  menOverallsClasp,
  shortsMaterial,
} from "./datas.js";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../../features/publishSlice";
import Select from "../../components/Select.js";

const MenOveralls = () => {
  const dispatch = useDispatch();

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <div>
        <Input
          name="size"
          onChange={addPublishData}
          color="orange"
          variant="standard"
          label="Размер"
        />
      </div>
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"color"} title={"Цвет"} items={color} />
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный/RU)"}
        items={size}
      />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Select
        title={"Низ"}
        name={"bottom"}
        firstValue={"pants"}
        secondValue={"shorts"}
        firstDisplay={"Брюки"}
        secondDisplay={"Шорты"}
      />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={shortsMaterial}
      />
      <Options itemName={"clasp"} title={"Застежка"} items={menOverallsClasp} />
    </div>
  );
};

export default MenOveralls;
