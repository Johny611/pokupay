import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const List = ({ list }) => {
  const user = useSelector((state) => state.user.user);
  const activeChat = useSelector((state) => state.activeChat.data);
  const [unReadMessages, setUnreadMessages] = useState(0);
  const [lastMsg, setLastMsg] = useState({});
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const initialData = () => {
      setUnreadMessages(0);
      list.map((item, i, arr) => {
        item.read === false && setUnreadMessages((prevNum) => prevNum + 1); // unread messages

        if (userData === null) {
          item.sentBy !== user.uid &&
            setUserData({
              name: item.displayName,
              product: item.productName,
            });
          // user info
        }
        return arr.length - 1 === i && setLastMsg(item); // last message
      });
    };
    initialData();
  }, [list, user.uid, userData]);

  return (
    <div
      className={`transition-all flex justify-between items-center gap-2 
      ${list[0].createdAt === activeChat?.items[0].createdAt && "bg-[#161a25]"}
       p-[10px] border-t border-[#ffffff24] h-20 hover:bg-[#161a2591] cursor-pointer`}
    >
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={
            (list && lastMsg.photoURL) || require("../../assets/icons/user.png")
          }
          alt={lastMsg.productName}
        />
        <div className="text-[#b1b2b5]">
          <p className="text-[11px] font-semibold">
            {list && userData && userData.name}
          </p>
          <p className="text-[13px] text-white font-medium">
            {list && userData && userData.product}
          </p>
          <p className="text-xs text-[#ffffffcf]">{list && lastMsg.content}</p>
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

export default List;
