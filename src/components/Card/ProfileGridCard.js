import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProfileGridCard = () => {
  return (
    <Link
      to="/ads/:id"
      className="bg-white xs:min-w-[180px] md:min-w-[200px] min-w-[250px] rounded-md overflow-hidden"
    >
      <div>
        <div>
          <img
            className=" object-contain my-0 mx-auto"
            src={require("../../assets/apple2.jpeg")}
            alt=""
          />
        </div>
        <div className="bg-[#2a3041] p-3">
          <p className="text-white text-[15px]">Macbook pro 2022</p>
          <p className="text-white font-bold">1200$</p>
          <div className="text-white text-[13px]">
            <p>Ташкент, Сергелийский район</p>
            <p>30 августа 2022 г.</p>
          </div>
          <div className="xs:text-white flex justify-end items-center gap-5">
            <img
              className="w-[30px]"
              src={require("../../assets/electrical-devices.png")}
              alt=""
            />
            <IoHeartOutline style={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileGridCard;
