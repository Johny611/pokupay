import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const BusinessType = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  return (
    <div>
      <p className="text-[14px] mb-[5px]">Частный или бизнес</p>
      <div className="flex gap-2">
        <button
          name="personal"
          onClick={() => dispatch(setPublish({ personal: "personal" }))}
          className={`py-[5px] w-[150px] rounded-[5px] ${
            publishData.personal === "personal"
              ? "bg-[#febe32]"
              : "bg-[#f2f2f3]"
          }`}>
          Частное лицо
        </button>
        <button
          name="personal"
          onClick={() => dispatch(setPublish({ personal: "business" }))}
          className={`py-[5px] w-[150px] rounded-[5px]  ${
            publishData.personal === "business"
              ? "bg-[#febe32]"
              : "bg-[#f2f2f3]"
          }`}>
          Бизнес
        </button>
      </div>
    </div>
  );
};

export default BusinessType;
