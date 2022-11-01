import React from "react";
import { Avatar } from "@material-tailwind/react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileChat = () => {
  const user = useSelector((state) => state.user.user);
  let token = sessionStorage.getItem("Auth token");

  if (!token) {
    return <Navigate to="/auth" />;
  } else {
    return (
      <div className="flex-1 bg-[#2b3143] w-full">
        <div className="flex items-center p-3 text-white text-base font-medium bg-[#212633] mb-3 border-b">
          <p className="text-2xl p-2">Сообщения</p>
        </div>
        <div className="flex justify-evenly items-center text-white font-medium bg-[#212633] p-3 w-[90%] my-o mx-auto rounded-lg">
          <p>Я Покупаю</p>
          <p>Я Продаю</p>
        </div>
        <div>
          <Link
            to="/chat/chat-room/:id"
            className="flex bg-[#212633] hover:bg-[#353d50] my-2 mx-0 p-[10px]"
          >
            <Avatar
              className="object-contain mr-2"
              src={require("../assets/icons/user-filled.png")}
              alt="avatar"
              variant="circular"
            />
            <div className="text-white">
              <p className="text-base">Андрей</p>
              <p className="text-sm">Здравсвуйте, хотел уточнить...</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
};

export default MobileChat;
