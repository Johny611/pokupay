import React from "react";
import Options from "../../components/Options.js";
import Select from "../../components/Select.js";
import { brand, size, cut, insulation, fur, length } from "./datas.js";

const SheepskinFurCoats = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Бренд"} items={brand} />
      <Options
        itemName={"sizeEU-RU"}
        title={"Размер (EU/ Международный / RU)"}
        items={size}
      />
      <Options itemName={"length"} title={"Длина"} items={length} />
      <Options itemName={"fur"} title={"Мех"} items={fur} />
      <Select
        title={"Тип"}
        name={"type"}
        firstValue={"sheepskinCoat"}
        secondValue={"furCoat"}
        firstDisplay={"Дубленки"}
        secondDisplay={"Шубы"}
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
    </div>
  );
};

export default SheepskinFurCoats;
