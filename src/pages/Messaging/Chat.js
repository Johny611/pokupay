import React, { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import search from "../../assets/search.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSendOutline } from "react-icons/io5";
import { IoImage } from "react-icons/io5";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";
import { database, db, auth } from "../../firebase";
import {
  ref,
  get,
  set,
  remove,
  onValue,
  child,
  push,
  update,
  query,
  orderByKey,
} from "firebase/database";
import useMessages from "../../hooks/useMessages";
import ChatList from "./ChatList";

const Chat = () => {
  const user = useSelector((state) => state.user.user);
  const [, , loadBuyList, loadSellList, buyingsChats, sellingChats] =
    useMessages();
  let token = sessionStorage.getItem("Auth token");
  const [sellBuy, setSellBuy] = useState("buy");

  const [sellingID, setSellingID] = useState([]);
  const [buyingID, setBuyingID] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      const chatsSnapshot = await getDocs(
        collection(db, "users", user?.uid, "chats") //  buying chat list
      );
      chatsSnapshot.forEach((doc) => {
        setBuyingID((prev) => [...prev, doc.id]);
      });

      const adsSnapshot = await getDocs(
        collection(db, "users", user.uid, "ads") //  selling chat list
      );
      adsSnapshot.forEach((doc) => {
        setSellingID((prev) => [...prev, doc.id]);
      });
    };
    getLists();
  }, []);

  useEffect(() => {
    // chat id is user.uid here
    const loader = () => {
      loadBuyList(buyingID, user?.uid);
    };
    return () => {
      loader();
    };
  }, []);

  useEffect(() => {
    const loader = () => {
      loadSellList(sellingID);
    };
    return () => {
      loader();
    };
  }, []);

  console.log(sellingID);
  console.log(buyingID);

  console.log("sellingChats", sellingChats);
  console.log("buyingChats", buyingsChats);
  // console.log(chatLists);

  if (!auth.currentUser) {
    return <Navigate to="/auth" />;
  } else {
    return (
      <div className="xs:pb-12 flex items-stretch flex-1 w-full h-full bg-[#212633]">
        <div className="chat_container flex flex-row justify-between overflow-hidden w-full min-h-[600px] pr-4">
          <div className="flex-[0.4] bg-[#212633] my-4">
            <div className="flex justify-evenly mb-3 pt-3 text-white">
              <p
                onClick={() => setSellBuy("buy")}
                className="flex-1 cursor-pointer font-medium bg-[#febe32] hover:bg-[#2b3145] py-1 px-3 rounded-xl text-center text-black mx-[5px]">
                Покупаю
              </p>
              <p
                onClick={() => setSellBuy("sell")}
                className="flex-1 cursor-pointer font-medium bg-[#161a25] hover:bg-[#2b3145] py-1 px-3 rounded-xl text-center text-white mx-[5px]">
                Продаю
              </p>
            </div>
            <div className="flex bg-[#161a25] py-1 px-4 w-11/12 my-0 mx-auto rounded-full">
              <img src={search} alt="" className="w-5 object-contain" />
              <input
                className="w-full pl-3 text-[#b1b2b5] outline-none bg-transparent"
                type="search"
                name=""
                id=""
                placeholder="Search..."
              />
            </div>
            <div className="py-3">
              {sellBuy === "sell" &&
                sellingID.map((item) => <ChatList listID={item} />)}
              {sellBuy === "buy" &&
                buyingID.map((item) => <ChatList listID={item} />)}
            </div>
          </div>
          <div className="flex-1 relative bg-[#161a25] my-4 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 p-3 border-b border-[#ffffff3b]">
              <img
                className="w-[30px] object-contain"
                src={require("../../assets/icons/user.png")}
              />
              <Link to="/user-profile" className="text-[#b1b2b5]">
                John Smith
              </Link>
            </div>
            <div className="border-b border-[#ffffff38]">
              <Link
                to={"/product-link"}
                className="flex items-center gap-2 text-white">
                <img
                  className="w-[100px] object-contain"
                  src="https://photos5.appleinsider.com/gallery/45240-88149-The-new-MacBook-Pro-16-inch-xl.jpg"
                />
                <div>
                  <Typography
                    className="text-[13px] text-[#c0bfbf]"
                    variant="small">
                    Macbook Pro M2
                  </Typography>
                  <Typography
                    className="text-xs text-[#c0bfbf]"
                    variant="small">
                    1000 u.e
                  </Typography>
                </div>
              </Link>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center absolute w-full bottom-0 h-14 border-t border-[#ffffff3b]">
              <div className="flex items-center mx-4">
                <IoImage className="text-2xl text-white my-3 cursor-pointer" />
              </div>
              <div className="flex-1 bg-[#212633] rounded-full">
                <input
                  className="w-full bg-transparent py-[7px] px-3 text-white outline-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Type your message here..."
                />
              </div>
              <div className="flex items-center mx-4">
                <IoSendOutline className="text-[20px] text-white my-3 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;
