import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  const [activeCategory, setActiveCategory] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActiveCategory(false);
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
      onClick={() => setActiveCategory(!activeCategory)}
      className={`${
        activeCategory ? "open_sub_menu" : ""
      } transitiona-all flex flex-col items-center relative m-2 w-[100px] text-center pb-3 cursor-pointer`}
    >
      <div className="transition-all my-2 rounded-full">
        <img
          className="w-[70px] h-[70px] object-contain"
          src={!activeCategory ? props.icon : props.activeIcon}
          alt=""
        />
      </div>
      <p className="font-semibold">{props.name}</p>

      {activeCategory ? (
        <div className="transition-all z-10 font-black bg-[#2f364b] text-white p-3 rounded-lg flex items-center justify-center min-w-max">
          <ul className="transition-all flex flex-col justify-center items-center">
            {props.types.map((item) => (
              <li
                key={item.name}
                className="py-2 font-semibold transition-all hover:bg-white hover:w-full hover:text-black hover:px-3 hover:rounded-xl"
              >
                {" "}
                <Link to={`/${props.category}/${item.path}`}>{item.rus}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CategoryItem;
