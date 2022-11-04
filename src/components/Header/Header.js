import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import messageOutlined from "../../assets/icons/message-outlined.png";
import likeOutlined from "../../assets/icons/like-outlined.png";
import profile from "../../assets/profile.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCaretDown } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Header() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isHeaderShow, setIsHeaderShow] = useState("");
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const hideHeader = () => {
      if (location.pathname === "/" && windowSize.innerWidth <= 425) {
        setIsHeaderShow("hidden");
      } else if (
        location.pathname === "profile" &&
        windowSize.innerWidth <= 425
      ) {
        setIsHeaderShow("hidden");
      } else if (location.pathname === "/auth") {
        setIsHeaderShow("hidden");
      } else if (
        location.pathname === "/favourite" &&
        windowSize.innerWidth <= 425
      ) {
        setIsHeaderShow("hidden");
      } else if (
        location.pathname === "/publish" &&
        windowSize.innerWidth <= 425
      ) {
        setIsHeaderShow("hidden");
      } else if (
        location.pathname === "/chat" &&
        windowSize.innerWidth <= 700
      ) {
        setIsHeaderShow("hidden");
      } else if (
        location.pathname === "/chat/chat-room/:id" &&
        windowSize.innerWidth <= 700
      ) {
        setIsHeaderShow("hidden");
      } else {
        setIsHeaderShow("");
      }
    };
    hideHeader();
  }, [location, windowSize]);

  return (
    <div className={`${isHeaderShow} header_container md:py-10`}>
      <Link to="/" className="logo_container">
        <img src={logo} alt="" />
      </Link>
      <div className="header_links">
        <div className="languages mr-3">
          <p></p>
          Рус
        </div>

        {windowSize.innerWidth > 768 ? (
          <div className="header_links_wrapper">
            <Link to="/chat" className="header_link">
              <img src={messageOutlined} alt="" />
              {/* <p>Сообщения</p> */}
            </Link>
            <Link to="/favourite" className="header_link">
              <img src={likeOutlined} alt="" />
              {/* <p>Избранные</p> */}
            </Link>
            <div className="profile_menu relative">
              <Link to="/profile" className="header_link relative">
                <img src={profile} alt="" />
                <p>Профиль</p>
                <IoCaretDown className="text-white ml-1" />
              </Link>
              <div className="dropdown_menu bg-[#212633] absolute top-full min-w-[200px] z-10 rounded-lg">
                <div className="flex items-center justify-around p-3 border-b border-[#ffbe32]">
                  <img
                    className="w-6 h-6 object-contain mx-2"
                    src={require("../../assets/icons/user-filled.png")}
                    alt=""
                  />
                  <div className="flex-1">
                    <p className="text-[13px] text-white font-semibold">
                      {user
                        ? user.email || user.providerData[0].phoneNumber
                        : "Sign in"}
                    </p>
                    <p className="text-xs text-[#d8d8d8]">ID: 5464576</p>
                  </div>
                </div>
                {user != null && (
                  <>
                    <div className="flex flex-col text-white">
                      <Link
                        to="/profile"
                        className="p-3 hover:bg-white hover:text-black"
                      >
                        Настройки
                      </Link>
                      <Link
                        to="/chat"
                        className="p-3 hover:bg-white hover:text-black"
                      >
                        Сообщения
                      </Link>
                      <Link
                        to="/profile"
                        className="p-3 hover:bg-white hover:text-black"
                      >
                        Обьявления
                      </Link>
                      <Link
                        to="/profile/top-up-balance"
                        className="p-3 hover:bg-white hover:text-black"
                      >
                        Пополнить баланс
                      </Link>
                      <Link
                        to="/profile/packages"
                        className="p-3 hover:bg-white hover:text-black"
                      >
                        Пакет тарифы
                      </Link>
                    </div>
                    <div className="text-white border-t border-[#ffbe32]">
                      <button
                        onClick={handleSignOut}
                        className="p-3 w-full text-red-600"
                      >
                        Выйти
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {windowSize.innerWidth > 768 && (
          <div className="header_submit_ad">
            <Link
              to="publish"
              className="bg-white py-2 px-5 rounded-lg font-medium"
            >
              Подать обьявление
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
