import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Condition = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <p className="text-[14px] mb-[5px]">Состояние</p>
      <div className="flex gap-2">
        <button
          name="b/u"
          onClick={() => dispatch(setPublish({ condition: "b/u" }))}
          className={`py-[5px] w-[150px] rounded-[5px] ${
            publishData.condition === "b/u" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}>
          Б/у
        </button>
        <button
          name="new"
          onClick={() => dispatch(setPublish({ condition: "new" }))}
          className={`py-[5px] w-[150px] rounded-[5px]  ${
            publishData.condition === "new" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
          }`}>
          Новый
        </button>
      </div>
    </div>
  );
};

export default Condition;
