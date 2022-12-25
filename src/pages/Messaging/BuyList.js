import React, { useState, useEffect } from "react";
import useMessages from "../../hooks/useMessages";
import { useDispatch, useSelector } from "react-redux";
import { setActiveChat } from "../../features/activeChatSlice.js";

const BuyList = ({ listID, directory, activeChat }) => {
  const dispatch = useDispatch();
  const { buyingsChats, unReadMessages, lastMsg, userData } = useMessages(
    listID,
    directory,
    activeChat
  );

  useEffect(() => {
    const setChat = () => {
      activeChat === listID && dispatch(setActiveChat(buyingsChats));
    };
    setChat();
  }, [activeChat, buyingsChats]);

  console.log("buyingChats", buyingsChats);
  // console.log("lastMsg", lastMsg);
  // console.log("userData", userData);
  // console.log("unreadMessages", unReadMessages);

  return (
    <div
      className={`transition-all flex justify-between items-center gap-2 ${
        activeChat === listID && "bg-[#161a25]"
      } p-[10px] border-t border-[#ffffff24] h-20 hover:bg-[#161a2591] cursor-pointer`}
    >
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={
            (buyingsChats && lastMsg.photoURL) ||
            require("../../assets/icons/user.png")
          }
        />
        <div className="text-[#b1b2b5]">
          <p className="text-[11px] font-semibold">
            {buyingsChats && userData && userData.name}
          </p>
          <p className="text-[13px] text-white font-medium">
            {buyingsChats && userData && userData.product}
          </p>
          <p className="text-xs text-[#ffffffcf]">
            {buyingsChats && lastMsg.content}
          </p>
        </div>
      </div>
      {unReadMessages !== 0 && (
        <div className="flex self-center bg-[#7985eb] rounded-full">
          <p className="font-semibold text-[11px] text-white py-[3px] px-[8px]">
            {unReadMessages}
          </p>
        </div>
      )}
    </div>
  );
};

export default BuyList;
