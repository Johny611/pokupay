import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col my-3 w-[40%] md:w-[50%] xs:w-full">
        <label className="text-sm" htmlFor="name">
          Заявитель
        </label>
        <input
          onChange={addPublishData}
          name="contactName"
          className="bg-[#f2f2f3] p-2 outline-none"
          id="name"
        />
      </div>
      <div className="flex flex-col my-3 w-[40%] md:w-[50%] xs:w-full">
        <label className="text-sm" htmlFor="email">
          Email-адрес
        </label>
        <input
          onChange={addPublishData}
          name="email"
          className="bg-[#f2f2f3] p-2 outline-none"
          id="email"
        />
      </div>
      <div className="flex flex-col my-3 w-[40%] md:w-[50%] xs:w-full">
        <label className="text-sm" htmlFor="phone">
          Номер телефона
        </label>
        <input
          onChange={addPublishData}
          name="phone"
          className="bg-[#f2f2f3] p-2 outline-none"
          id="phone"
        />
      </div>
    </div>
  );
};

export default Contacts;
