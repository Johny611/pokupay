import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import Condition from "./Condition";

const Spares = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <div className="flex flex-wrap max-w-[450px] gap-3 ">
        <div className="flex flex-wrap gap-4 my-3">
          <Condition />
        </div>
        <div>
          <p className="text-[14px] mb-[5px]">Для авто или мото</p>
          <div className="flex gap-2">
            <button
              name="auto"
              onClick={() => dispatch(setPublish({ spareFor: "auto" }))}
              className={`py-[5px] w-[150px] rounded-[5px] ${
                publishData.spareFor === "auto"
                  ? "bg-[#febe32]"
                  : "bg-[#f2f2f3]"
              }`}>
              Авто
            </button>
            <button
              name="new"
              onClick={() => dispatch(setPublish({ spareFor: "moto" }))}
              className={`py-[5px] w-[150px] rounded-[5px]  ${
                publishData.spareFor === "moto"
                  ? "bg-[#febe32]"
                  : "bg-[#f2f2f3]"
              }`}>
              Мото
            </button>
          </div>
        </div>
        <div className="selectdiv flex flex-col">
          <label className="text-[14px]" for="spareType">
            Вид запчасти
          </label>
          <select
            className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
            name="spareType"
            id="spareType"
            value={publishData.spareType}
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
    </div>
  );
};

export default Spares;
