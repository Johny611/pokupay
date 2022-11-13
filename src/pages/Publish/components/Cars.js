import React from "react";
import { Input, Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const bodyType = [
  { name: "", rus: "Кабриолет", eng: "", uzb: "" },
  { name: "", rus: "Пикап", eng: "", uzb: "" },
  { name: "", rus: "Купе", eng: "", uzb: "" },
  { name: "", rus: "Универсал", eng: "", uzb: "" },
  { name: "", rus: "Хэтчбек", eng: "", uzb: "" },
  { name: "", rus: "Минивэн", eng: "", uzb: "" },
  { name: "", rus: "Внедорожник", eng: "", uzb: "" },
  { name: "", rus: "Седан", eng: "", uzb: "" },
  { name: "", rus: "Другой", eng: "", uzb: "" },
];

const transmission = [
  { name: "", rus: "Механическая", eng: "", uzb: "" },
  { name: "", rus: "Автоматическая", eng: "", uzb: "" },
  { name: "", rus: "Другая", eng: "", uzb: "" },
];

const color = [
  { name: "", rus: "Белый", eng: "", uzb: "" },
  { name: "", rus: "Черный", eng: "", uzb: "" },
  { name: "", rus: "Синий", eng: "", uzb: "" },
  { name: "", rus: "Серый", eng: "", uzb: "" },
  { name: "", rus: "Серебристый", eng: "", uzb: "" },
  { name: "", rus: "Красный", eng: "", uzb: "" },
  { name: "", rus: "Зеленый", eng: "", uzb: "" },
  { name: "", rus: "Апельсин", eng: "", uzb: "" },
  { name: "", rus: "Асфальт", eng: "", uzb: "" },
  { name: "", rus: "Бежевый", eng: "", uzb: "" },
  { name: "", rus: "Бирюзовый", eng: "", uzb: "" },
  { name: "", rus: "Бронзовый", eng: "", uzb: "" },
  { name: "", rus: "Вишнёвый", eng: "", uzb: "" },
  { name: "", rus: "Голубой", eng: "", uzb: "" },
  { name: "", rus: "Желтый", eng: "", uzb: "" },
  { name: "", rus: "Золотой", eng: "", uzb: "" },
  { name: "", rus: "Коричневый", eng: "", uzb: "" },
  { name: "", rus: "Магнолии", eng: "", uzb: "" },
  { name: "", rus: "Матовый", eng: "", uzb: "" },
  { name: "", rus: "Оливковый", eng: "", uzb: "" },
  { name: "", rus: "Розовый", eng: "", uzb: "" },
  { name: "", rus: "Сафари", eng: "", uzb: "" },
  { name: "", rus: "Фиолетовый", eng: "", uzb: "" },
  { name: "", rus: "Хамелеон", eng: "", uzb: "" },
];

const fuelType = [
  { name: "", rus: "Бензин", eng: "", uzb: "" },
  { name: "", rus: "Дизель", eng: "", uzb: "" },
  { name: "", rus: "Другой", eng: "", uzb: "" },
];

const condition = [
  { name: "", rus: "Отличное", eng: "", uzb: "" },
  { name: "", rus: "Хорошее", eng: "", uzb: "" },
  { name: "", rus: "Среднее", eng: "", uzb: "" },
  { name: "", rus: "Требует ремонта", eng: "", uzb: "" },
];

const owners = [{ name: "" }];

const Cars = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div className="">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-wrap gap-4 my-3">
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="model">
              Модель
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px] w-[280px] outline-none text-black"
              name="model"
              id="model"
              value={publishData.model}
              onChange={addPublishData}>
              <option value=""></option>
              {}
              <option value="fullTime">Полная занятость</option>
              <option value="partTime">Частичная занятость</option>
              <option value="project">Проектная / временная работа</option>
              <option value="internship">Стажировка</option>
              <option value="volunteering">Волонтерство</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="bodyType">
              Тип кузова
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="bodyType"
              id="bodyType"
              value={publishData.bodyType}
              onChange={addPublishData}>
              <option value=""></option>
              <option value="cabriolet">Кабриолет</option>
              <option value="pickup">Пикап</option>
              <option value="coupe">Купе</option>
              <option value="universal">Универсал</option>
              <option value="hatchback">Хэтчбек</option>
              <option value="minivan">Минивэн</option>
              <option value="suv">Внедорожник</option>
              <option value="sedan">Седан</option>
              <option value="other">Другой</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="transmission">
              Коробка передач
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="transmission"
              id="transmission"
              value={publishData.transmission}
              onChange={addPublishData}>
              <option value=""></option>
              <option value="mechanical">Механическая</option>
              <option value="automatic">Автоматическая</option>
              <option value="other">Другая</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="color">
              Цвет
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="color"
              id="color"
              value={publishData.color}
              onChange={addPublishData}>
              <option value=""></option>
              <option value="white">Белый</option>
              <option value="black">Черный</option>
              <option value="blue">Синий</option>
              <option value="gray">Серый</option>
              <option value="silver">Серебристый</option>
              <option value="red">Красный</option>
              <option value="green">Зеленый</option>
              <option value="apelsin">Апельсин</option>
              <option value="asphalt">Асфальт</option>
              <option value="beige">Бежевый</option>
              <option value="turquoise">Бирюзовый</option>
              <option value="bronze">Бронзовый</option>
              <option value="cherry">Вишнёвый</option>
              <option value="yellow">Желтый</option>
              <option value="gold">Золотой</option>
              <option value="brown">Коричневый</option>
              <option value="magnolias">Магнолии</option>
              <option value="matte">Матовый</option>
              <option value="olive">Оливковый</option>
              <option value="pink">Розовый</option>
              <option value="safari">Сафари</option>
              <option value="violet">Фиолетовый</option>
              <option value="chameleon">Хамелеон</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="fuelType">
              Вид топлива
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="fuelType"
              id="fuelType"
              value={publishData.fuelType}
              onChange={addPublishData}>
              <option value=""></option>
              <option value="petrol">Бензин</option>
              <option value="diesel">Дизель</option>
              <option value="other">Другой</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="condition">
              Состояние машины
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="condition"
              id="condition"
              value={publishData.condition}
              onChange={addPublishData}>
              <option value=""></option>
              <option value="excellent">Отличное</option>
              <option value="good">Хорошее</option>
              <option value="middle">Среднее</option>
              <option value="repairRequired">Требует ремонта</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="owners">
              Количество хозяев
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="owners"
              id="owners"
              value={publishData.owners}
              onChange={addPublishData}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>
        </div>
        <div>
          <Input
            name="year"
            onChange={addPublishData}
            color="orange"
            variant="standard"
            label="Год выпуска"
          />
        </div>
        <div>
          <Input
            name="mileage"
            onChange={addPublishData}
            color="orange"
            variant="standard"
            label="Пробег (км)"
          />
        </div>
        <div>
          <Input
            name="engineVolume"
            onChange={addPublishData}
            color="orange"
            variant="standard"
            label="Объем двигателя (см³)"
          />
        </div>

        <div>
          <p>Доп. опции</p>
          <div className="flex flex-wrap gap-4 xs:flex-col">
            <Checkbox
              defaultChecked={false}
              name="customs"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="customs"
              color="orange"
              label="Растаможена"
            />
            <Checkbox
              defaultChecked={false}
              name="electricMirrors"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="electricMirrors"
              color="orange"
              label="Электрозеркала"
            />
            <Checkbox
              defaultChecked={false}
              name="epowerMirrors"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="epowerMirrors"
              color="orange"
              label="Эл. стеклоподъемники"
            />
            <Checkbox
              defaultChecked={false}
              name="airConditioner"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="airConditioner"
              color="orange"
              label="Кондиционер"
            />
            <Checkbox
              defaultChecked={false}
              name="securitySystem"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="securitySystem"
              color="orange"
              label="Охранная система"
            />
            <Checkbox
              defaultChecked={false}
              name="parktronic"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="parktronic"
              color="orange"
              label="Парктроник"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
