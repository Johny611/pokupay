import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Bus = () => {
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
            <label className="text-[14px]" for="brand">
              Марка
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px] w-[280px] outline-none text-black"
              name="brand"
              id="brand"
              value={publishData.brand}
              onChange={addPublishData}>
              <option value=""></option>
              <option value="fullTime">Полная занятость</option>
              <option value="partTime">Частичная занятость</option>
              <option value="project">Проектная / временная работа</option>
              <option value="internship">Стажировка</option>
              <option value="volunteering">Волонтерство</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bus;
