import React, { useState, useEffect, useRef } from "react";
import { categories } from "../components/Categories/CategoryList";
import { IoCaretDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [openSubCategory, setOpenSubCategory] = useState("");
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenSubCategory("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={menuRef}
      className="w-full bg-[#212633] text-white transition-all pb-14"
    >
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between items-center"
        >
          <div
            onClick={() => setOpenSubCategory(item.id)}
            className="flex items-center justify-between w-full p-3 hover:bg-[#333d59]"
          >
            <div className="flex items-center">
              <img className="w-20" src={item.pic} alt={item.name} />
              <h3 className="ml-3">{item.name}</h3>
            </div>
            <div onClick={() => setOpenSubCategory("")}>
              <IoCaretDownSharp style={{ fontSize: "30px" }} />
            </div>
          </div>
          <div className="flex flex-col text-sm font-medium transition-all">
            {openSubCategory === item.id &&
              item.types[0].subTypes?.map((type) => (
                <Link
                  to={`/${type?.path}`}
                  key={type.name}
                  className="my-[10px]"
                >
                  {type.rus}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
