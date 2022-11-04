import React from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({
  category,
  subCategory,
  productID,
  img,
  title,
  address,
  date,
  price,
  currency,
  categoryPic,
}) => {
  return (
    <Link to={`/product/${category}/${subCategory}/${productID}`}>
      <div className="transition-all hover:scale-[102%] xs:bg-[#474f6b] flex flex-col rounded-md overflow-hidden bg-white p-2 w-full">
        <div className="w-full h-[150px]">
          <img
            className="rounded-md w-full h-full object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="xs:text-white flex flex-col justify-between flex-1 p-2">
          <p className="text-[15px] font-medium">{title}</p>
          <div className="xs:text-white text-[12px] text-[#515151]">
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
    </Link>
  );
};

export default Card;
