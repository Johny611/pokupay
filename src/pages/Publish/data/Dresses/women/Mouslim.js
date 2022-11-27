import React from "react";
import Options from "../../../components/Options.js";
import { womenMouslimDress, intSize, womenDressColor } from "../datas.js";

const Mouslim = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options itemName={"type"} title={"Вид"} items={womenMouslimDress} />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={intSize}
      />
    </div>
  );
};

export default Mouslim;
