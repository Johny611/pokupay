import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Avatar } from "@material-tailwind/react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { IoSendOutline } from "react-icons/io5";
import { IoAttachOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const messages = [
  { email: "andrey@gmail.com", name: "Andrey", message: "Привет Жуманазвр" },
  {
    email: "kalandarov611@gmail.com",
    name: "Jumanazar",
    message: "Привет Андрей",
  },
  { email: "andrey@gmail.com", name: "Andrey", message: "bla bla bla" },
  { email: "kalandarov611@gmail.com", name: "Jumanazar", message: "blablabla" },
  { email: "andrey@gmail.com", name: "Andrey", message: "Привет Жуманазвр" },
  {
    email: "kalandarov611@gmail.com",
    name: "Jumanazar",
    message: "Привет Андрей",
  },
  { email: "andrey@gmail.com", name: "Andrey", message: "bla bla bla" },
  { email: "kalandarov611@gmail.com", name: "Jumanazar", message: "blablabla" },
  { email: "andrey@gmail.com", name: "Andrey", message: "bla bla bla" },
  { email: "kalandarov611@gmail.com", name: "Jumanazar", message: "blablabla" },
  { email: "andrey@gmail.com", name: "Andrey", message: "Привет Жуманазвр" },
  {
    email: "kalandarov611@gmail.com",
    name: "Jumanazar",
    message: "Привет Андрей",
  },
  { email: "andrey@gmail.com", name: "Andrey", message: "bla bla bla" },
  { email: "kalandarov611@gmail.com", name: "Jumanazar", message: "blablabla" },
];

const ChatRoom = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  let token = sessionStorage.getItem("Auth token");

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex items-center justify-between bg-[#1e232f] py-2">
        <div className="flex items-center">
          <IoArrowBack
            onClick={() => navigate(-1)}
            className="text-white text-3xl my-0 mx-3"
          />
          <div className="flex items-center">
            <Avatar
              className="object-contain w-10 h-10 mr-2 border"
              src={require("../assets/icons/user-filled.png")}
              alt="avatar"
              variant="circular"
            />
            <p className="text-white font-semibold">Андрей</p>
          </div>
        </div>
        <div className="flex items-center pr-2 gap-4">
          <img
            className="w-7 h-7 object-contain"
            src={require("../assets/icons/favourite.png")}
            alt=""
          />
          <img
            className="w-7 h-7 object-contain"
            src={require("../assets/icons/block.png")}
            alt=""
          />
          <img
            className="w-7 h-7 object-contain"
            src={require("../assets/icons/complain.png")}
            alt=""
          />
          <img
            className="w-7 h-7 object-contain"
            src={require("../assets/icons/delete.png")}
            alt=""
          />
        </div>
      </div>
      <Link
        to="/products/:id"
        className="flex justify-end items-center gap-5 text-white bg-[#212633] p-1"
      >
        <p>Посмотреть товар</p>
        <img
          className="w-12 h-12 object-contain rounded-[3px] overflow-hidden"
          src={require("../assets/apple1.jpeg")}
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-end flex-auto h-[500px] overflow-auto bg-[#2f354a]">
        <div className="flex flex-col overflow-auto">
          {messages.map((message) =>
            message.email === user?.email ? (
              <div className="self-end my-2 bg-[#1d2028] w-max py-[5px] px-[15px] border-t border-[#febe32] rounded-md mr-2">
                <div className="flex gap-[10px] text-white text-xs font-semibold">
                  <p>{message.name}</p>
                  <p className="text-[11px]">12:00 am</p>
                </div>
                <p className="text-white text-base">{message.message}</p>
              </div>
            ) : (
              <div className="self-start my-2 bg-[#1d2028] w-max py-[5px] px-[15px] border-t border-[#febe32] rounded-md ml-2">
                <div className="flex gap-[10px] text-white text-xs font-semibold">
                  <p>{message.name}</p>
                  <p className="text-[11px]">12:10 am</p>
                </div>
                <p className="text-white text-base">{message.message}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex bg-[#212633] py-1">
        <div className="flex-1">
          <input
            className="w-full text-white bg-transparent p-3 outline-none"
            type="text"
            name=""
            id=""
            placeholder="Type your message here..."
          />
        </div>
        <div className="flex items-center pr-3 text-white">
          <IoAttachOutline style={{ fontSize: "30px", marginRight: "10px" }} />
          <IoSendOutline style={{ fontSize: "27px" }} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
