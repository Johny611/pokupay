import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProfileRowCard = () => {
  return (
    <Link to="/ads/:id" className="flex w-full my-2">
      <div className="max-w-[180px] h-auto object-contain">
        <img className="" src={require("../../assets/apple2.jpeg")} alt="" />
      </div>
      <div className="flex flex-col flex-1 bg-[#2a3041] p-3">
        <div className="xs:text-white flex justify-between items-center gap-5">
          <p className="text-white text-[15px]">Macbook pro 2022</p>
          <div className="flex items-center gap-2">
            <img
              className="w-[30px] xs:w-[23px]"
              src={require("../../assets/electrical-devices.png")}
              alt=""
            />
            <IoHeartOutline style={{ fontSize: "25px" }} />
          </div>
        </div>
        <p className="text-white font-bold">1200$</p>
        <div className="text-white text-[13px] flex-1">
          <p>Ташкент, Сергелийский район</p>
          <p>30 августа 2022 г.</p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileRowCard;
