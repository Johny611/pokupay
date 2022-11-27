import React from "react";
import Options from "../../../components/Options.js";
import { womenNationalMaterial, intSize, womenDressColor } from "../datas.js";

const NationalDress = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={womenNationalMaterial}
      />
      <Options
        itemName={"size"}
        title={"Размер (EU / Международный / RU)"}
        items={intSize}
      />
    </div>
  );
};

export default NationalDress;
