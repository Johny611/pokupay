import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Footer = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  let location = useLocation();
  const [isFooterShow, setIsFooterShow] = useState("");

  useEffect(() => {
    const hideFooter = () => {
      if (location.pathname === "/auth") {
        setIsFooterShow("hidden");
      } else {
        setIsFooterShow("");
      }
    };
    hideFooter();
  }, [location]);

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
    <div
      className={` ${windowSize.innerWidth <= 700 ? "hidden" : ""} ${
        windowSize.innerWidth <= 768 ? "pb-20" : ""
      } ${isFooterShow} flex justify-evenly items-center border-t border-gray-500 bg-[#212633] min-h-[200px] w-full gap-5 p-5`}
    >
      <div className="text-white flex flex-col gap-1">
        <Link to="technical-support">Техническая поддержка</Link>
        <Link to="support">Помощь и Обратная связь</Link>
        <Link to="paid-services">Платные услуги</Link>
        <Link to="technical-support">Реклама на сайте</Link>
      </div>
      <div className="text-white flex flex-col gap-1">
        <Link to="security-rules">Правило безопасности</Link>
        <Link to="sitemap">Карта сайта</Link>
        <Link to="popular-requests">Популярные запросы на сайте</Link>
        <Link to="">Работа в POKUPAY</Link>
      </div>
      <div>
        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center w-fit h-fit border border-white rounded-[5px] text-white">
            <div className="mx-2 my-0">
              <img
                className="w-7"
                src={require("../../assets/icons/google-play.png")}
                alt=""
              />
            </div>
            <div className="mr-3">
              <p className="text-[11px] text-[#e6e6e6]">GET IT ON</p>
              <p className="font-semibold">Google Play</p>
            </div>
          </div>
          <div className="flex items-center w-fit h-fit border border-white rounded-[5px] text-white">
            <div className="mx-2 my-0">
              <img
                className="w-7"
                src={require("../../assets/icons/app-store.png")}
                alt=""
              />
            </div>
            <div className="mr-3">
              <p className="text-[11px] text-[#e6e6e6]">Download on the</p>
              <p className="font-semibold">App Store</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs mt-1 text-gray-400">
            Бесплатное приложение для твоего телефона
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
