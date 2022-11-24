import React from "react";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../../features/publishSlice";
import { Input } from "@material-tailwind/react";
import Options from "../../components/Options";
import { size, brand, color } from "./datas.js";

const material = [
  { name: "viscose", rus: "Вискоза", eng: "Viscose", uzb: "Viskoza" },
  { name: "cotton", rus: "Хлопок", eng: "Cotton", uzb: "Paxta" },
  { name: "polyester", rus: "Полиэстер", eng: "Polyester", uzb: "Polyester" },
  { name: "other", rus: "Другой", eng: "Other", uzb: "Boshqa" },
];

const Tshirts = () => {
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
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный/RU)"}
        items={size}
      />
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"color"} title={"Цвет"} items={color} />
      <Options itemName={"material"} title={"Материал"} items={material} />
    </div>
  );
};

export default Tshirts;
