import React from "react";
import MobileCategoryItem from "./MobileCategoryItem";
import { categories } from "./CategoryList";
import { Link } from "react-router-dom";

const MobileCategories = () => {
  return (
    <div className="max-w-full">
      <div className="w-full flex justify-between border-b border-white">
        <p className="xs:text-white text-base font-semibold mx-[15px] my-[5px]">
          Категории
        </p>
        <Link
          className="text-base text-[#808080] font-semibold mx-[15px] my-[5px]"
          to="all-categories"
        >
          Смотреть все
        </Link>
      </div>
      <div className="xs:bg-[#212633] flex items-baseline overflow-x-auto pt-5 bg-white">
        {categories.map((item) => (
          <MobileCategoryItem
            key={item.id}
            img={item.pic}
            name={item.rus}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCategories;
