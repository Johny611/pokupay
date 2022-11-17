import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import { Input, Checkbox } from "@material-tailwind/react";
import Commisioned from "../components/Commisioned";

const inApartment = [
  { name: "airConditioner", rus: "Кондиционер", eng: "", uzb: "" },
  { name: "tv", rus: "Телевизор", eng: "", uzb: "" },
  { name: "phone", rus: "Телефон", eng: "", uzb: "" },
  { name: "washingMachine", rus: "Стиральная машина", eng: "", uzb: "" },
  { name: "internet", rus: "Интернет", eng: "", uzb: "" },
  { name: "kitchen", rus: "Кухня", eng: "", uzb: "" },
  { name: "fridge", rus: "Холодильник", eng: "", uzb: "" },
  { name: "cableTV", rus: "Кабельное ТВ", eng: "", uzb: "" },
  { name: "balcony", rus: "Балкон", eng: "", uzb: "" },
];

const nearApartment = [
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

const LongTermEstate = () => {
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
          name="area"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Общая площадь м²"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="floor"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этаж"
        />
      </div>
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="builtYear">
          Год постройки/сдачи
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="builtYear"
          id="builtYear"
          value={publishData.builtYear}
          onChange={addPublishData}
        >
          <option value=""></option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2011-2014">2011-2014</option>
          <option value="2001-2010">2001-2010</option>
          <option value="1990-2000">1990-2000</option>
          <option value="1980-1989">1980-1989</option>
          <option value="1960-1979">1960-1979</option>
          <option value="before1960">старше 1960</option>
        </select>
      </div>
      <Commisioned />
      <div className="max-w-[300px] mt-4">
        <Input
          name="roomsNumber"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Количество комнат"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="numberOfFloors"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этажность дома"
        />
      </div>
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="buildingType">
          Тип строения
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="buildingType"
          id="buildingType"
          value={publishData.buildingType}
          onChange={addPublishData}
        >
          <option value=""></option>
          <option value="brick">Кирпичный</option>
          <option value="panel">Панельный</option>
          <option value="monolithic">Монолитный</option>
          <option value="blocky">Блочный</option>
          <option value="wood">Деревянный</option>
        </select>
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
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="layout">
          Планировка
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="layout"
          id="layout"
          value={publishData.layout}
          onChange={addPublishData}
        >
          <option value=""></option>
          <option value="adjacent">Смежная</option>
          <option value="separate">Раздельная</option>
          <option value="Adjacent-separate">Смежно - раздельная</option>
          <option value="studio">Студия</option>
          <option value="penthouse">Пентхаус</option>
          <option value="multilevel">Многоуровневая</option>
          <option value="littleFamily">Малосемейка</option>
        </select>
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="livingArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Жилая площадь м²"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="kitchenArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Площадь кухни м²"
        />
      </div>
      <div className="mt-4">
        <p className="text-[14px] mb-[5px]">Тип жилья</p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(setPublish({ housingType: "new" }))}
            className={`py-[3px] w-[150px] rounded-[5px] ${
              publishData.housingType === "new"
                ? "bg-[#febe32]"
                : "bg-[#f2f2f3]"
            }`}
          >
            Новостройки
          </button>
          <button
            onClick={() => dispatch(setPublish({ housingType: "secondary" }))}
            className={`py-[3px] w-[150px] rounded-[5px]  ${
              publishData.housingType === "secondary"
                ? "bg-[#febe32]"
                : "bg-[#f2f2f3]"
            }`}
          >
            Вторичный рынок
          </button>
        </div>
      </div>
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="bathroom">
          Санузел
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="bathroom"
          id="bathroom"
          value={publishData.bathroom}
          onChange={addPublishData}
        >
          <option value=""></option>
          <option value="seperated">Раздельный</option>
          <option value="combined">Совмещенный</option>
          <option value="2bathroomsAndMore">2 санузла и более</option>
        </select>
      </div>

      <div className="max-w-[300px] mt-4">
        <Input
          name="ceilingHeight"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Высота потолков"
        />
      </div>
      <div className="mt-4">
        <p>В квартире есть</p>
        <div className="grid grid-cols-3">
          {inApartment.map((item) => (
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
          {nearApartment.map((item) => (
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
    </div>
  );
};

export default LongTermEstate;
