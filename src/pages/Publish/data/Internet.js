import { Input } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const services = [
  {
    name: "web",
    rus: "Веб-разработка",
    eng: "Web development",
    uzb: "Web dasturlash",
  },
  {
    name: "mobile",
    rus: "Мобильная разработка",
    eng: "Mobile development",
    uzb: "Mobil dasturlash",
  },
  {
    name: "desktop",
    rus: "Разработка компьютерных приложений",
    eng: "Desktop app development",
    uzb: "Desktop dasturlash",
  },
  {
    name: "server",
    rus: "Серверное ПО",
    eng: "Server development",
    uzb: "Server dasturlash",
  },
  { name: "other", rus: "Разное", eng: "Other", uzb: "Boshqa" },
];

const Internet = () => {
  const publishData = useSelector((state) => state.publishData.data);
  const dispatch = useDispatch();

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div className="max-w-[250px] mt-6 mb-2">
      <Input
        type="number"
        name="price"
        value={publishData.price}
        onChange={(e) =>
          dispatch(setPublish({ [e.target.name]: e.target.value }))
        }
        color="orange"
        label="Цена"
      />
      <div className="mt-6 ml-1">
        <Input
          name="company"
          onChange={addPublishData}
          color="orange"
          variant="standard"
          label="Название компании"
        />
        <div className="selectdiv w-fit flex flex-col mt-4">
          <label className="text-[14px]" for="serviceType">
            Услуги
          </label>
          <select
            className="border border-gray-400 rounded-md py-[8px] pl-[5px] pr-[40px] outline-none text-black"
            name="serviceType"
            id="serviceType"
            value={publishData.serviceType}
            onChange={(e) =>
              dispatch(setPublish({ [e.target.name]: e.target.value }))
            }
          >
            <option value=""></option>
            {services.map((item) => (
              <option key={item.name} value={item.name}>
                {item.rus}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Internet;
