import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Options = ({ itemName, title, items }) => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);
  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };
  return (
    <div className="selectdiv flex flex-col max-w-[300px] mt-4">
      <label className="text-[14px]" for={itemName}>
        {title}
      </label>
      <select
        className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
        name={itemName}
        id={itemName}
        value={publishData.itemName}
        onChange={addPublishData}
      >
        <option value=""></option>
        {items.map((item) => (
          <option key={item.name} id={item.name} value={item.name}>
            {item.rus || item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
