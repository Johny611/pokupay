import React from "react";
import Options from "../../components/Options.js";
import Select from "../../components/Select.js";
import {
  brand,
  length,
  size,
  cut,
  insulation,
  coatSeason,
  coatMaterial,
} from "./datas.js";

const Raincoat = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options itemName={"length"} title={"Длина"} items={length} />
      <Options itemName={"material"} title={"Материал"} items={coatMaterial} />
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный / RU)"}
        items={size}
      />
      <Select
        title={"Капюшон"}
        name={"hood"}
        firstValue={"no"}
        secondValue={"yes"}
        firstDisplay={"Нет"}
        secondDisplay={"Есть"}
      />
      <Options itemName={"cut"} title={"Покрой"} items={cut} />
      <Options
        itemName={"insulation"}
        title={"Утеплитель"}
        items={insulation}
      />
      <Options itemName={"season"} title={"Сезон"} items={coatSeason} />
    </div>
  );
};

export default Raincoat;
