import React from "react";
import Options from "../../../components/Options";
import {
  womenDressColor,
  shortsMaterial,
  intSize,
  womenBrand,
  womenShortsLanding,
  womenShortsPeculiarity,
} from "../datas.js";

const WomenShorts = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={womenDressColor} />
      <Options
        itemName={"material"}
        title={"Материал"}
        items={shortsMaterial}
      />
      <Options
        itemName={"size"}
        title={"Размер (W / Международный / RU)"}
        items={intSize}
      />
      <Options itemName={"brand"} title={"Бренд"} items={womenBrand} />
      <Options
        itemName={"landing"}
        title={"Посадка"}
        items={womenShortsLanding}
      />
      <Options
        itemName={"peculiarity"}
        title={"Особенность"}
        items={womenShortsPeculiarity}
      />
    </div>
  );
};

export default WomenShorts;
