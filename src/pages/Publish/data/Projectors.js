import React from "react";
import Options from "../components/Options";

const types = [
  { name: "", rus: "Модули памяти", eng: "", uzb: "" },
  { name: "", rus: "Видеокарты", eng: "", uzb: "" },
  { name: "", rus: "Звуковые карты", eng: "", uzb: "" },
  { name: "", rus: "Материнские платы", eng: "", uzb: "" },
  { name: "", rus: "Оптические приводы", eng: "", uzb: "" },
  { name: "", rus: "Жесткие диски", eng: "", uzb: "" },
  { name: "", rus: "Корпуса", eng: "", uzb: "" },
  { name: "", rus: "Процессоры", eng: "", uzb: "" },
  { name: "", rus: "ТВ-тюнеры", eng: "", uzb: "" },
  { name: "", rus: "Блоки питания", eng: "", uzb: "" },
  { name: "", rus: "Прочие комплектующие", eng: "", uzb: "" },
];

const Projectors = () => {
  return (
    <div>
      <Options itemName={"type"} title={"Типы комплектующих"} items={types} />
    </div>
  );
};

export default Projectors;
