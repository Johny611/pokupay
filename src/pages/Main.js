import React, { useEffect, useState } from "react";
import "../App.css";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import Ads from "../components/Ads/Ads";
import ColumnCard from "../components/Card/ColumnCard";
import MobileCategories from "../components/Categories/MobileCategories";
import Section from "../components/Section/Section";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Main() {
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
    <div className="flex flex-col items-center max-w-[60%] lg:max-w-[80%] xs:max-w-[100%] xs:bg-[#212633]">
      <Search />
      {windowSize.innerWidth <= 425 ? <MobileCategories /> : <Categories />}
      <Ads />
      <div className="w-full max-w-[98%]">
        <h3 className="xs:text-white mx-0 my-4 pl-3 pt-3 text-2xl font-semibold">
          Рекомендованное Вам
        </h3>
        <div className="xs:w-[98%] max-w-[1400px] flex overflow-x-auto gap-3 pb-8">
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
      </div>
      <div className="w-full max-w-[98%]">
        <h3 className="xs:text-white my-5 pl-3 text-2xl font-semibold">
          Премиум объявления
        </h3>
        <div className="premium_ads  mb-5">
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
          <ColumnCard />
        </div>
      </div>
      <div className="w-full max-w-[98%]">
        <h3 className="xs:text-white my-5 pl-3 text-2xl font-semibold">
          Недавно просмотренные обьявления
        </h3>
        <div className="xs:w-[98%] max-w-[1400px] flex overflow-x-auto gap-3">
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
      </div>
      <div className="w-full max-w-[98%]">
        <h3 className="xs:text-white my-5 pl-3 text-2xl font-semibold">
          Добавлено в избранное
        </h3>
        <div className="xs:w-[98%] max-w-[1400px] flex overflow-x-auto gap-3">
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
      </div>

      <Ads />
    </div>
  );
}

export default Main;
