import React from "react";
import { Input, Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const extra = [
  { name: "airConditioner", rus: "Кондиционер", eng: "", uzb: "" },
  { name: "tv", rus: "Телевизор", eng: "", uzb: "" },
  { name: "phone", rus: "Телефон", eng: "", uzb: "" },
  { name: "washingMachine", rus: "Стиральная машина", eng: "", uzb: "" },
  { name: "internet", rus: "Интернет", eng: "", uzb: "" },
  { name: "fridge", rus: "Холодильник", eng: "", uzb: "" },
  { name: "cableTV", rus: "Кабельное ТВ", eng: "", uzb: "" },
  { name: "balcony", rus: "Балкон", eng: "", uzb: "" },
];
const nearHouse = [
  {
    name: "hospitalPolyclinic",
    rus: "Больница, поликлиника",
    eng: "Hospital, polyclinic",
    uzb: "Kasalxona, poliklinika",
  },
  {
    name: "parkGreenArea",
    rus: "Парк, зелёная зона",
    eng: "Park, green area",
    uzb: "Park, yashil maydon",
  },
  {
    name: "supermarketShops",
    rus: "Супермаркет, магазины",
    eng: "Supermarket, shops",
    uzb: "Supermarket, do'konlar",
  },
  {
    name: "playground",
    rus: "Детская площадка",
    eng: "Playground",
    uzb: "O'yin maydonchasi",
  },
  {
    name: "entertainmentEstablishments",
    rus: "Развлекательные заведения",
    eng: "Entertainment establishments",
    uzb: "Ko'ngilochar muassasalar",
  },
  { name: "school", rus: "Школа", eng: "School", uzb: "Maktab" },
  {
    name: "kindergarden",
    rus: "Детский сад",
    eng: "Kindergarten",
    uzb: "Bolalar bog'chasi",
  },
  {
    name: "restaurantsCafes",
    rus: "Рестораны, кафе",
    eng: "Restaurants, cafes",
    uzb: "Restoranlar, kafelar",
  },
  {
    name: "station",
    rus: "Остановки",
    eng: "Stops",
    uzb: "Marshrut to'xtash joyi",
  },
  { name: "parking", rus: "Стоянка", eng: "Parking", uzb: "Avtoturargoh" },
];

const repair = [
  {
    name: "author'sProject",
    rus: "Авторский проект",
    eng: "Author's project",
    uzb: "Oldindan ishlangan",
  },
  { name: "average", rus: "Средний", eng: "Average", uzb: "O'rtacha" },
  {
    name: "roughFinish",
    rus: "Черновая отделка",
    eng: "Rough finish",
    uzb: "Qo'pol tugatilgan",
  },
  {
    name: "euroRenovation",
    rus: "Евроремонт",
    eng: "Euro renovation",
    uzb: "Yevro remont",
  },
  {
    name: "repairRequired",
    rus: "Требует ремонта",
    eng: "Requires repair",
    uzb: "Ta'mirlashni talab qiladi",
  },
  {
    name: "prefinishing",
    rus: "Предчистовая отделка",
    eng: "Prefinishing",
    uzb: "Oldindan tugatilgan",
  },
];

const Room = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);
  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };
  return (
    <div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="livingArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Площадь комнаты"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="livingArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Всего комнат в квартире"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="livingArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этаж"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="livingArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этажность дома"
        />
      </div>
      <div className="mt-4">
        <p className="text-[14px] mb-[5px]">Смежная комната</p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(setPublish({ adjoiningRoom: "yes" }))}
            className={`py-[3px] w-[150px] rounded-[5px] ${
              publishData.adjoiningRoom === "yes"
                ? "bg-[#febe32]"
                : "bg-[#f2f2f3]"
            }`}
          >
            Да
          </button>
          <button
            onClick={() => dispatch(setPublish({ adjoiningRoom: "no" }))}
            className={`py-[3px] w-[150px] rounded-[5px]  ${
              publishData.adjoiningRoom === "no"
                ? "bg-[#febe32]"
                : "bg-[#f2f2f3]"
            }`}
          >
            Нет
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[14px] mb-[5px]">Меблирована</p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(setPublish({ furnitured: "yes" }))}
            className={`py-[3px] w-[150px] rounded-[5px] ${
              publishData.furnitured === "yes" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
            }`}
          >
            Да
          </button>
          <button
            onClick={() => dispatch(setPublish({ furnitured: "no" }))}
            className={`py-[3px] w-[150px] rounded-[5px]  ${
              publishData.furnitured === "no" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
            }`}
          >
            Нет
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p>В квартире есть</p>
        <div className="grid grid-cols-3">
          {extra.map((item) => (
            <Checkbox
              key={item.name}
              defaultChecked={false}
              name={item.name}
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id={item.name}
              color="orange"
              label={item.rus}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p>Рядом есть</p>
        <div className="grid grid-cols-3">
          {nearHouse.map((item) => (
            <Checkbox
              key={item.name}
              defaultChecked={false}
              name={item.name}
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id={item.name}
              color="orange"
              label={item.rus}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p>Ремонт</p>
        <div className="grid grid-cols-3">
          {repair.map((item) => (
            <Checkbox
              key={item.name}
              defaultChecked={false}
              name={item.name}
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id={item.name}
              color="orange"
              label={item.rus}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[14px] mb-[5px]">Комиссионные</p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(setPublish({ commission: "yes" }))}
            className={`py-[3px] w-[150px] rounded-[5px] ${
              publishData.commission === "yes" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
            }`}
          >
            Да
          </button>
          <button
            onClick={() => dispatch(setPublish({ commission: "no" }))}
            className={`py-[3px] w-[150px] rounded-[5px]  ${
              publishData.commission === "no" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
            }`}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
