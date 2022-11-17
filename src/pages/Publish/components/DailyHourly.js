import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const DailyHourly = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  return (
    <div className="mt-4">
      <p className="text-[14px] mb-[5px]">Срок аренды</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(setPublish({ deadline: "hourly" }))}
          className={`py-[3px] w-[150px] rounded-[5px] ${
            publishData.deadline === "hourly" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}
        >
          Почасово
        </button>
        <button
          onClick={() => dispatch(setPublish({ deadline: "daily" }))}
          className={`py-[3px] w-[150px] rounded-[5px]  ${
            publishData.deadline === "daily" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}
        >
          Посуточно
        </button>
      </div>
    </div>
  );
};

export default DailyHourly;
