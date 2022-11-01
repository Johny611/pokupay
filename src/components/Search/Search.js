import React, { useEffect, useState } from "react";
import search from "../../assets/search.png";
import locationWhite from "../../assets/icons/location.png";
import locationBlack from "../../assets/icons/location-black.png";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Search() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="xs:bg-[#444f6b] xs:w-[98%] flex items-center justify-between rounded-md my-5 mx-auto bg-white pl-4 w-full">
      <div className="flex items-center flex-1">
        <img className="w-6 h-6" src={search} alt="" />
        <input
          type="search"
          className="p-3 w-full bg-transparent outline-none"
          name=""
          id=""
          placeholder="293.576 в городе обьявлений"
        />
      </div>
      <div className="flex items-center relative">
        <label htmlFor="region" className="absolute left-0 cursor-pointer">
          {windowSize.innerWidth >= 425 ? (
            <img className="w-[20px]" src={locationBlack} alt="" />
          ) : (
            <img className="w-[20px]" src={locationWhite} alt="" />
          )}
        </label>
        <select
          name="region"
          id="region"
          className="cursor-pointer bg-transparent z-10 mr-2 p-[10px] max-w-[40px] xs:bg-transparent xs:text-white outline-none">
          <option className="search_default" value=""></option>
          <option value="andijan">
            <p className="text-[#454f6b]">Андижанская область</p>
          </option>
          <option value="bukhoro">
            <p className="text-[#454f6b]">Бухарская область</p>
          </option>
          <option value="jizzakh">
            <p className="text-[#454f6b]">Джизакская область</p>
          </option>
          <option value="karakalpakstan">
            <p className="text-[#454f6b]">Каракалпакстан</p>
          </option>
          <option value="kashkadarya">
            <p className="text-[#454f6b]">Кашкадарьинская область</p>
          </option>
          <option value="navoiy">
            <p className="text-[#454f6b]">Навоийская область</p>
          </option>
          <option value="navoiy">
            <p className="text-[#454f6b]">Наманганская область</p>
          </option>
          <option value="samarqand">
            <p className="text-[#454f6b]">Самаркандская область</p>
          </option>
          <option value="surkhondaryo">
            <p className="text-[#454f6b]">Сурхандарьинская область</p>
          </option>
          <option value="sirdaryo">
            <p className="text-[#454f6b]">Сырдарьинская область</p>
          </option>
          <option value="tashkent">
            <p className="text-[#454f6b]">Ташкентская область</p>
          </option>
          <option value="fergana">
            <p className="text-[#454f6b]">Ферганская область</p>
          </option>
          <option value="khorezm">
            <p className="text-[#454f6b]">Хорезмская область</p>
          </option>
        </select>
        <button className="bg-[#2a3249] p-[12px] overflow-hidden rounded-tr-[6px] rounded-br-[6px] xs:text-white">
          <img
            className="w-6 h-6"
            src={require("../../assets/icons/search.png")}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Search;
