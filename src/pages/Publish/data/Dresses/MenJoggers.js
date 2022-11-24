import React from "react";
import Options from "../../components/Options";
import Select from "../../components/Select";
import { useDispatch } from "react-redux";
import { Input } from "@material-tailwind/react";
import { setPublish } from "../../../../features/publishSlice";
import {
  clasp,
  color,
  menJoggersPattern,
  menJoggersDecor,
  brand,
  menJoggersMaterial,
  size,
  season,
} from "./datas";

const MenJoggers = () => {
  const dispatch = useDispatch();

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <Options itemName={"clasp"} title={"Застежка"} items={clasp} />
      <Options itemName={"color"} title={"Цвет"} items={color} />
      <Options itemName={"pattern"} title={"Узор"} items={menJoggersPattern} />
      <Options itemName={"decor"} title={"Декор"} items={menJoggersDecor} />
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
      <Select
        title={"Длина"}
        name={"length"}
        firstValue={"shortened"}
        secondValue={"standard"}
        firstDisplay={"Укороченные"}
        secondDisplay={"Стандартные"}
      />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={menJoggersMaterial}
      />
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный/RU)"}
        items={size}
      />
      <Options itemName={"season"} title={"Сезон"} items={season} />
    </div>
  );
};

export default MenJoggers;
