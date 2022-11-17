import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Select = ({
  title,
  name,
  firstValue,
  secondValue,
  firstDisplay,
  secondDisplay,
}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState();

  return (
    <div className="mt-4">
      <p className="text-[14px] mb-[5px]">{title}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            dispatch(setPublish({ [name]: firstValue }));
            setActive(firstValue);
          }}
          className={`py-[3px] w-[150px] rounded-[5px] ${
            active === firstValue ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}
        >
          {firstDisplay}
        </button>
        <button
          onClick={() => {
            dispatch(setPublish({ [name]: secondValue }));
            setActive(secondValue);
          }}
          className={`py-[3px] w-[150px] rounded-[5px]  ${
            active === secondValue ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}
        >
          {secondDisplay}
        </button>
      </div>
    </div>
  );
};

export default Select;
