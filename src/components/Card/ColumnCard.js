import React from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const Card = ({ img, title, address, date, price, currency, categoryPic }) => {
  return (
    <div className="xs:bg-[#474f6b] flex flex-col rounded-md overflow-hidden bg-white p-2 max-w-full">
      <div>
        <img
          className="column_card_img border border-[#212633] rounded-lg"
          src={img}
          alt=""
        />
      </div>
      <div className="xs:text-white flex flex-col justify-between flex-1 p-2">
        <p className="text-[15px] font-medium">{title}</p>
        <div className="xs:text-white text-[13px] text-[#515151]">
          <p>{address}</p>
          <p>{date}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">
            {price} {currency}
          </p>
          <div className="flex items-center flex-row gap-2">
            <img className="w-8 xs:w-6" src={categoryPic} alt="" />
            <IoHeartOutline className="text-[25px] xs:text-[35px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
