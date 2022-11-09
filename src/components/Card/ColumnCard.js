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
  pic,
  favourite,
  addFavourite,
  removeFavourite,
}) => {
  return (
    <div className="transition-all hover:scale-[102%] hover:border hover:border-[#febe3261] xs:bg-[#474f6b] flex flex-col rounded-md overflow-hidden bg-white p-2 w-full">
      <Link
        to={`/product/${category}/${subCategory}/${productID}`}
        className="w-full">
        <div className="w-full h-[170px]">
          <img
            className="rounded-md w-full h-full object-cover"
            src={img}
            alt=""
          />
        </div>
      </Link>
      <div className="xs:text-white flex flex-col justify-between flex-1 p-2">
        <Link
          to={`/product/${category}/${subCategory}/${productID}`}
          className="w-full">
          <p className="text-[15px] font-medium">{title}</p>
          <div className="xs:text-white text-[12px] text-[#515151]">
            <p>{address}</p>
            <p>{date}</p>
          </div>
        </Link>
        <div className="flex justify-between items-center">
          <Link
            to={`/product/${category}/${subCategory}/${productID}`}
            className="w-full">
            <p className="font-semibold">
              {price} {currency}
            </p>
          </Link>
          <div className="flex items-center flex-row gap-2">
            <img className="w-6 xs:w-6" src={pic} alt="" />
            {favourite === true ? (
              <IoHeartSharp
                onClick={() =>
                  removeFavourite(category, subCategory, productID)
                }
                className="cursor-pointer text-[25px] text-[#febe32] xs:text-[35px]"
              />
            ) : (
              <IoHeartOutline
                onClick={() => addFavourite(category, subCategory, productID)}
                className="cursor-pointer text-[25px] xs:text-[35px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
