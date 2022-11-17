import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import { Input, Checkbox } from "@material-tailwind/react";
import DailyHourly from "../components/DailyHourly";

const DailyHourlyEstate = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

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
      eng: "",
      uzb: "",
    },
    { name: "parkGreenArea", rus: "Парк, зелёная зона", eng: "", uzb: "" },
    {
      name: "supermarketShops",
      rus: "Супермаркет, магазины",
      eng: "",
      uzb: "",
    },
    { name: "playground", rus: "Детская площадка", eng: "", uzb: "" },
    {
      name: "entertainmentEstablishments",
      rus: "Развлекательные заведения",
      eng: "",
      uzb: "",
    },
    { name: "school", rus: "Школа", eng: "", uzb: "" },
    { name: "kindergarden", rus: "Детский сад", eng: "", uzb: "" },
    { name: "restaurantsCafes", rus: "Рестораны, кафе", eng: "", uzb: "" },
    { name: "station", rus: "Остановки", eng: "", uzb: "" },
    { name: "parking", rus: "Стоянка", eng: "", uzb: "" },
  ];

  return (
    <div>
      <DailyHourly />
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
          name="floor"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этаж"
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
      <div className="max-w-[300px] mt-4">
        <Input
          name="bedroomNumbers"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Спальных мест"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="area"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Общая площадь м²"
        />
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
          name="numberOfFloors"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этажность дома"
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
    </div>
  );
};

export default DailyHourlyEstate;
