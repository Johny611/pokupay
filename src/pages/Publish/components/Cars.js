import React from "react";
import { Input, Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

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
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.value }))
              }>
              <option value=""></option>
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
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.value }))
              }>
              <option value=""></option>
              <option value="fullDay">Полный день</option>
              <option value="shiftWork">Сменный график</option>
              <option value="flexibleSchedule">Гибкий график</option>
              <option value="shiftMethod">Вахтовый метод</option>
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
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.value }))
              }>
              <option value=""></option>
              <option value="noExperience">Без опыта</option>
              <option value="1-3">От 1 года до 3 лет</option>
              <option value="3-6">От 3 до 6 лет</option>
              <option value="above-6">Более 6 лет</option>
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
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.value }))
              }>
              <option value=""></option>
              <option value="high">Высшее</option>
              <option value="incompleteHigh">Незаконченное высшее</option>
              <option value="secondary">Среднее</option>
              <option value="specializedSecondary">Среднее специальное</option>
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
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.value }))
              }>
              <option value=""></option>
              <option value="high">Высшее</option>
              <option value="incompleteHigh">Незаконченное высшее</option>
              <option value="secondary">Среднее</option>
              <option value="specializedSecondary">Среднее специальное</option>
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
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.value }))
              }>
              <option value=""></option>
              <option value="high">Высшее</option>
              <option value="incompleteHigh">Незаконченное высшее</option>
              <option value="secondary">Среднее</option>
              <option value="specializedSecondary">Среднее специальное</option>
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
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.value }))
              }>
              <option value=""></option>
              <option value="high">Высшее</option>
              <option value="incompleteHigh">Незаконченное высшее</option>
              <option value="secondary">Среднее</option>
              <option value="specializedSecondary">Среднее специальное</option>
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
