import React from "react";
import Options from "../components/Options";

const types = [
  {
    name: "cartridgesToners",
    rus: "Картриджи / тонеры",
    eng: "Cartridges / toners",
    uzb: "Kartridjlar / tonerlar",
  },
  {
    name: "floppyDisksDiscsCassettes",
    rus: "Дискеты / диски / кассеты",
    eng: "Floppy disks / discs / cassettes",
    uzb: "Disketlar / disklar / kassetalar",
  },
  {
    name: "otherConsumables",
    rus: "Прочие расходные материалы",
    eng: "Other Consumables",
    uzb: "Boshqa sarf materiallari",
  },
];

const ComputerExpendable = () => {
  return (
    <div>
      <Options
        itemName={"expendableType"}
        title={"Типы расходников"}
        items={types}
      />
    </div>
  );
};

export default ComputerExpendable;
