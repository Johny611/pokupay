import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

const Links = [
  {
    name: "Main",
    outlinedPic: (
      <img
        src={require("../../assets/icons/home-outlined.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    filledPic: (
      <img
        src={require("../../assets/icons/home-filled.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    path: "/",
  },
  {
    name: "Favourite",
    outlinedPic: (
      <img
        src={require("../../assets/icons/like-outlined.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    filledPic: (
      <img
        src={require("../../assets/icons/like-filled.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    path: "/favourite",
  },
  {
    name: "Publish",
    outlinedPic: (
      <img
        src={require("../../assets/icons/publish-outlined.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    filledPic: (
      <img
        src={require("../../assets/icons/publish-filled.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    path: "/publish",
  },
  {
    name: "Message",
    outlinedPic: (
      <img
        src={require("../../assets/icons/message-outlined.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    filledPic: (
      <img
        src={require("../../assets/icons/message-filled.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    path: "/chat",
  },
  {
    name: "Profile",
    outlinedPic: (
      <img
        src={require("../../assets/icons/user-outlined.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    filledPic: (
      <img
        src={require("../../assets/icons/user-filled.png")}
        style={{ width: "25px", height: "25px", objectFit: "contain" }}
      />
    ),
    path: "/profile",
  },
];

const Nav = () => {
  const [active, setActive] = useState("Main");
  const [isNavShow, setIsNavShow] = useState("");
  let location = useLocation();

  useEffect(() => {
    const hideNav = () => {
      if (location.pathname === "/chat/chat-room/:id") {
        setIsNavShow("hidden");
      } else {
        setIsNavShow("");
      }
    };
    hideNav();
  }, [location]);

  return (
    <div
      className={`${isNavShow} nav_container fixed flex justify-around items-center bottom-0 w-full bg-[#212633] h-12`}
    >
      {Links.map((item) => (
        <Link
          onClick={() => setActive(item.name)}
          key={item.name}
          to={item.path}
          className="nav_link flex flex-col items-center justify-evenly flex-[0.2] h-full text-xs"
        >
          {active === item.name ? item.filledPic : item.outlinedPic}
          <p className="text-xs font-semibold text-white">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
