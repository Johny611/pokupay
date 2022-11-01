import React from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const Card = () => {
  return (
    <div className="xs:bg-[#474f6b] flex flex-col rounded-md overflow-hidden bg-white p-2 max-w-full">
      <div>
        <img
          className="column_card_img border border-[#212633] rounded-lg"
          src={require("../../assets/apple1.jpeg")}
          alt=""
        />
      </div>
      <div className="xs:text-white flex flex-col justify-between flex-1 p-2">
        <p className="text-[15px] font-medium">Тест название обьявления</p>
        <div className="xs:text-white text-[13px] text-[#515151]">
          <p>Мирзо-Улугбек</p>
          <p>Вчера 12:00</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">100,000 сум</p>
          <div className="flex items-center flex-row gap-2">
            <img
              className="w-8 xs:w-6"
              src={require("../../assets/electrical-devices.png")}
              alt=""
            />
            <IoHeartOutline className="text-[25px] xs:text-[35px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
