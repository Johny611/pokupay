import React from "react";
import { Input, Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Vacancy = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div className="">
      <div className="my-3">
        <h3 className="text-sm font-medium">Зарплата</h3>
        <div>
          <div className="flex mb-3 items-end">
            <div className="flex flex-col mr-2 max-w-[110px]">
              <label className="text-[14px] mb-[5px]" htmlFor="priceFrom">
                От
              </label>
              <input
                onChange={addPublishData}
                className="bg-[#f2f2f3] outline-none p-2"
                type="number"
                name="fromPrice"
                value={publishData.fromPrice}
                id="priceFrom"
              />
            </div>
            <div className="flex flex-col max-w-[110px]">
              <label className="text-[14px] mb-[5px]" htmlFor="priceTo">
                до
              </label>
              <input
                onChange={addPublishData}
                className="bg-[#f2f2f3] outline-none p-2"
                type="number"
                name="priceTo"
                value={publishData.priceTo}
                id="priceTo"
              />
            </div>
            <div className="">
              <select
                onChange={addPublishData}
                value={publishData.currency}
                name="currency"
                className="bg-[#f2f2f3] outline-none ml-[5px] p-[9px] minimal"
              >
                <option value="sum">Сум</option>
                <option value="ue">у.е</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              name="hourly"
              onClick={(e) => dispatch(setPublish({ salary: e.target.name }))}
              className={`w-[150px] rounded-[5px] ${
                publishData.salary === "hourly"
                  ? "bg-[#febe32]"
                  : "bg-[#f2f2f3]"
              }`}
            >
              За час
            </button>
            <button
              name="monthly"
              onClick={(e) => dispatch(setPublish({ salary: e.target.name }))}
              className={`w-[150px] rounded-[5px] ${
                publishData.salary === "monthly"
                  ? "bg-[#febe32]"
                  : "bg-[#f2f2f3]"
              }`}
            >
              За месяц
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-wrap gap-4 my-3">
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="employmentType">
              Тип занятости
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px] w-[280px] outline-none text-black"
              name="employmentType"
              id="employmentType"
              value={publishData.employmentType}
              onChange={(e) =>
                dispatch(setPublish({ employmentType: e.target.value }))
              }
            >
              <option value=""></option>
              <option value="fullTime">Полная занятость</option>
              <option value="partTime">Частичная занятость</option>
              <option value="project">Проектная / временная работа</option>
              <option value="internship">Стажировка</option>
              <option value="volunteering">Волонтерство</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="schedule">
              График работы
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="schedule"
              id="schedule"
              value={publishData.schedule}
              onChange={(e) =>
                dispatch(setPublish({ schedule: e.target.value }))
              }
            >
              <option value=""></option>
              <option value="fullDay">Полный день</option>
              <option value="shiftWork">Сменный график</option>
              <option value="flexibleSchedule">Гибкий график</option>
              <option value="shiftMethod">Вахтовый метод</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="experience">
              Опыт работы
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="experience"
              id="experience"
              value={publishData.experience}
              onChange={(e) =>
                dispatch(setPublish({ experience: e.target.value }))
              }
            >
              <option value=""></option>
              <option value="noExperience">Без опыта</option>
              <option value="1-3">От 1 года до 3 лет</option>
              <option value="3-6">От 3 до 6 лет</option>
              <option value="above-6">Более 6 лет</option>
            </select>
          </div>
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="education">
              Образование
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="education"
              id="education"
              value={publishData.education}
              onChange={(e) =>
                dispatch(setPublish({ education: e.target.value }))
              }
            >
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
            name="company"
            onChange={addPublishData}
            color="orange"
            variant="standard"
            label="Название компании"
          />
        </div>
        <div>
          <Input
            name="workAddress"
            onChange={addPublishData}
            color="orange"
            variant="standard"
            label="Рабочий адрес"
          />
        </div>
        <Checkbox
          defaultChecked={false}
          name="remoteJob"
          onChange={(e) =>
            dispatch(setPublish({ [e.target.name]: e.target.checked }))
          }
          id="remote"
          color="orange"
          label="Удалённая работа"
        />
        <Checkbox
          name="recruitingOnline"
          onChange={(e) =>
            dispatch(setPublish({ [e.target.name]: e.target.checked }))
          }
          id="recruit_online"
          color="orange"
          label="Рекрутинг онлайн"
        />
        <div>
          <p>Наличие транспорта</p>
          <div className="flex gap-4 xs:flex-col">
            <Checkbox
              name="auto"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="auto"
              color="orange"
              label="Авто"
            />
            <Checkbox
              name="moped"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="moped"
              color="orange"
              label="Мопед"
            />
            <Checkbox
              name="bike"
              onChange={(e) =>
                dispatch(setPublish({ [e.target.name]: e.target.checked }))
              }
              id="bike"
              color="orange"
              label="Велосипед"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
