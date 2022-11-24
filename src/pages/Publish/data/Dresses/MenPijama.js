import React from "react";
import {
  brand,
  color,
  size,
  season,
  pattern,
  menPijamaMaterial,
} from "./datas.js";
import Options from "../../components/Options.js";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../../features/publishSlice";

const MenPijama = () => {
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
      <Options itemName={"pattern"} title={"Узор"} items={pattern} />
      <Options itemName={"season"} title={"Сезон"} items={season} />
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный/RU)"}
        items={size}
      />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={menPijamaMaterial}
      />
    </div>
  );
};

export default MenPijama;