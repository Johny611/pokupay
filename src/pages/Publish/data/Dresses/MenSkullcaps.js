import React from "react";
import { color } from "./datas.js";
import Options from "../../components/Options.js";

const MenSkullcaps = () => {
  return (
    <div>
      <Options itemName={"color"} title={"Цвет"} items={color} />
    </div>
  );
};

export default MenSkullcaps;
