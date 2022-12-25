import React, { useEffect, useState } from "react";
import "./Chat.css";
import {
  IoPersonOutline,
  IoSendOutline,
  IoBagHandleOutline,
  IoCheckmarkDoneOutline,
  IoImage,
  IoTrashOutline,
  IoFlagOutline,
  IoRemoveCircleOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import search from "../../assets/search.png";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Tooltip, Textarea } from "@material-tailwind/react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth, database } from "../../firebase";
import SellList from "./SellList";
import BuyList from "./BuyList";
import useMessages from "../../hooks/useMessages";
import timestampToDate from "timestamp-to-date";
import TextareaAutosize from "react-textarea-autosize";
import { serverTimestamp, ref, push } from "firebase/database";

const Chat = () => {
  let token = sessionStorage.getItem("Auth token");
  const user = useSelector((state) => state.user.user);
  const activeChat = useSelector((state) => state.activeChat.data);
  const [chatMessage, setChatMessage] = useState("");
  const [sellBuy, setSellBuy] = useState("buy");
  const [sellingID, setSellingID] = useState([]);
  const [buyingID, setBuyingID] = useState([]);
  const [currenChatID, setCurrentChatID] = useState("");
  const [sendingInfo, setSendingInfo] = useState({});
  const [chatInfo, setChatInfo] = useState({});
  const [product, setProduct] = useState({ photos: [] });

  useEffect(() => {
    const setChat = () => {
      activeChat &&
        activeChat.items.map((item) => {
          if (user?.uid !== item.sentBy) {
            setChatInfo({
              senderName: item.displayName,
              productName: item.productName,
            });
          }
        });
    };
    setChat();
  }, [activeChat]);

  useEffect(() => {
    const getPtoduct = async () => {
      if (activeChat) {
        const docRef = doc(
          db,
          activeChat.items[0].forBuy || activeChat.items[0].forSell
        );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    };
    getPtoduct();
  }, [activeChat]);

  const handleInput = (e) => {
    console.log(e);
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      setChatMessage((prev) => (prev += "\n"));
      e.preventDefault();
    }
  };

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
    const setSendingMessage = () => {
      if (activeChat && user) {
        if (activeChat.id === user.uid) {
          setSendingInfo({
            content: chatMessage,
            createdAt: serverTimestamp(),
            displayName: user.displayName,
            sentBy: user.uid,
            productName: activeChat.items[0].productName,
            forBuy: activeChat.items[0].forBuy,
            photoURL: activeChat.items[0].photoURL,
            read: false,
            type: "text",
          });
        } else {
          setSendingInfo({
            content: chatMessage,
            createdAt: serverTimestamp(),
            displayName: user.displayName,
            sentBy: user.uid,
            productName: activeChat.items[0].productName,
            forSell: activeChat.items[0].forBuy,
            photoURL: activeChat.items[0].photoURL,
            read: false,
            type: "text",
          });
        }
      }
      console.log("sendingInfo", sendingInfo);
    };
    setSendingMessage();
  }, [chatMessage]);

  const sendMessage = async () => {
    await push(
      ref(database, `chats/${currenChatID}/${activeChat.id}`),
      sendingInfo
    )
      .then(() => setChatMessage(""))
      .catch((err) => console.log(err));
  };

  // console.log("sellingID", sellingID);

  // console.log("chat message", chatMessage);

  // console.log("current chat", currenChatID);
  // console.log("activeChat", activeChat);
  // console.log("sendingInfo", sendingInfo);

  if (!auth.currentUser) {
    return <Navigate to="/auth" />;
  } else {
    return (
      <div className="xs:pb-12 flex items-stretch flex-1 w-full h-full bg-[#212633]">
        <div className="chat_container flex flex-row justify-between overflow-hidden w-full min-h-[600px] pr-4">
          <div className="flex-[0.4] bg-[#212633] my-4">
            <div className="flex justify-evenly mb-3 text-white">
              <p
                onClick={() => setSellBuy("buy")}
                className={`flex-1 cursor-pointer font-medium ${
                  sellBuy === "buy"
                    ? "bg-[#febe32] text-black hover:bg-[#87620b]"
                    : "bg-[#161a25] hover:bg-[#2b3145]"
                } py-1 px-3 rounded-lg text-center mx-[5px]`}
              >
                Покупаю
              </p>
              <p
                onClick={() => setSellBuy("sell")}
                className={`flex-1 cursor-pointer font-medium ${
                  sellBuy === "sell"
                    ? "bg-[#febe32] text-black hover:bg-[#87620b]"
                    : "bg-[#161a25] hover:bg-[#2b3145]"
                } py-1 px-3 rounded-lg text-center text-white mx-[5px]`}
              >
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
            <div className="mt-3 max-h-[480px] overflow-y-auto overflow-x-hidden">
              {sellBuy === "sell" &&
                sellingID.map((item) => (
                  <div onClick={() => setCurrentChatID(item)} key={item}>
                    <SellList listID={item} />
                  </div>
                ))}
              {sellBuy === "buy" &&
                buyingID.map((item) => (
                  <div onClick={() => setCurrentChatID(item)} key={item}>
                    <BuyList
                      listID={item}
                      directory={user.uid}
                      activeChat={currenChatID}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col flex-1 relative bg-[#161a25] my-4 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between gap-2 p-3 border-b border-[#ffffff3b]">
              <div className="flex items-center gap-2">
                <img
                  className="w-[30px] object-contain"
                  src={require("../../assets/icons/user.png")}
                />
                <Link to="/user-profile" className="text-[#b1b2b5]">
                  {chatInfo.senderName}
                </Link>
              </div>
              <div className="flex gap-3 text-white text-xl">
                <IoBookmarkOutline />
                <IoFlagOutline />
                <IoRemoveCircleOutline />
                <IoTrashOutline />
              </div>
            </div>
            <div className="border-b border-[#ffffff38]">
              <Link
                to={"/product-link"}
                className="flex items-center gap-2 text-white"
              >
                <img
                  className="w-[100px] object-contain"
                  src={product && product?.photos[0]?.url}
                />
                <div>
                  <Typography
                    className="text-[13px] text-[#c0bfbf]"
                    variant="small"
                  >
                    {chatInfo.productName}
                  </Typography>
                  <Typography
                    className="text-xs text-[#c0bfbf]"
                    variant="small"
                  >
                    {product.price && product.price}
                    {!product.price &&
                      `${product.fromPrice} - ${product.priceTo}`}{" "}
                    {product.currency}
                  </Typography>
                </div>
              </Link>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden h-full max-h-[450px]">
              {activeChat &&
                activeChat.items.map((item) => (
                  <div
                    className={`flex flex-col w-fit mx-[10px] my-2 transition-all ${
                      item.sentBy === user.uid
                        ? "self-end items-end"
                        : "flex-row-reverse items-baseline"
                    }`}
                    key={item.createdAt}
                  >
                    <div
                      className={`flex gap-4 relative py-1 rounded-t-xl ${
                        item.sentBy === user.uid
                          ? "self-end rounded-bl-xl pl-4 pr-1 bg-[#febe3221]"
                          : "rounded-br-xl flex-row-reverse px-3 bg-[#292f40]"
                      }`}
                    >
                      <Typography
                        // key={i}
                        className="text-white whitespace-pre-line"
                        variant="small"
                      >
                        {item.content.split("\n").join("\n")}
                      </Typography>

                      <IoCheckmarkDoneOutline
                        className={`text-lg self-end ${
                          item.sentBy !== user.uid && "hidden"
                        } ${
                          item.read === false
                            ? "text-[#c3c3c3]"
                            : "text-[#febe32]"
                        }`}
                      />
                    </div>
                    <Typography
                      variant="small"
                      className={`text-gray-500 text-[10px] m-[3px] ${
                        item.sentBy === user.uid ? "self-end" : "self-start"
                      }`}
                    >
                      {timestampToDate(item.createdAt, "yyyy-MM-dd  HH-mm")}
                    </Typography>
                    {/* // need to update with moment time format library */}
                  </div>
                ))}
            </div>
            <div className="flex items-center w-full min-h-14 border-t border-[#ffffff3b]">
              <div className="flex items-center mx-4">
                <IoImage className="text-2xl text-white my-3 cursor-pointer" />
              </div>
              <div className="flex-1 mt-2 relative">
                <TextareaAutosize
                  onKeyDown={(e) => handleInput(e)}
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  name="chatMessage"
                  id="chatMessage"
                  placeholder="Type your message here..."
                  maxRows={6}
                  className="w-full h-10 bg-[#212633] overflow-hidden resize-none rounded-xl py-[7px] px-3 text-white outline-none"
                />
              </div>
              <div className="flex items-center mx-4">
                <IoSendOutline
                  onClick={() => sendMessage()}
                  className="text-[20px] text-white my-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;
