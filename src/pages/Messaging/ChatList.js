import React, { useState, useEffect } from "react";
import useMessages from "../../hooks/useMessages";

const ChatList = ({ listID }) => {
  const [, , loadBuyList, loadSellList, buyingsChats, sellingChats] =
    useMessages();

  useEffect(() => {
    return;
  }, []);

  return (
    <div className="flex items-center gap-2 p-[10px] bg-[#161a25] hover:bg-[#8091ffb3]">
      <img
        className="w-[30px] object-contain"
        src={photoURL || require("../../assets/icons/user.png")}
      />
      <div className="text-[#b1b2b5]">
        <p className="text-sm font-medium">{displayName}</p>
        <p className="text-sm font-medium">{productName}</p>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  );
};

export default ChatList;
