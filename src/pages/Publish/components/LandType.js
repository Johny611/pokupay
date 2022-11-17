import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const LandType = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  return (
    <div className="mt-4">
      <p className="text-[14px] mb-[5px]">Тип участка</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(setPublish({ landType: "yes" }))}
          className={`py-[3px] w-[150px] rounded-[5px] ${
            publishData.landType === "yes" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}
        >
          Да
        </button>
        <button
          onClick={() => dispatch(setPublish({ landType: "no" }))}
          className={`py-[3px] w-[150px] rounded-[5px]  ${
            publishData.landType === "no" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}
        >
          Нет
        </button>
      </div>
    </div>
  );
};

export default LandType;
