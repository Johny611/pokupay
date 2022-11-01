import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import search from "../assets/search.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSendOutline } from "react-icons/io5";
import { IoAttachOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.user.user);
  let token = sessionStorage.getItem("Auth token");

  if (!token) {
    return <Navigate to="/auth" />;
  } else {
    return (
      <div className="xs:pb-12 flex flex-1 items-start w-full h-full">
        <div className="chat_container flex flex-row justify-between m-3 rounded-xl overflow-hidden w-full min-h-[600px] bg-white">
          <div className="flex-[0.4] bg-[#2f364a]">
            <div className="flex justify-evenly mb-3 pt-3 text-white">
              <p>Покупаю</p>
              <p>Продаю</p>
            </div>
            <div className="flex bg-white p-3 w-11/12 my-0 mx-auto rounded-xl">
              <img src={search} alt="" className="w-5 object-contain" />
              <input
                className="w-full pl-3 outline-none"
                type="search"
                name=""
                id=""
                placeholder="Search product..."
              />
            </div>
            <div className="py-3">
              <div className="flex items-center p-[10px] bg-[#5a698f] hover:bg-[#8091ffb3]">
                <IoBagHandleOutline
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                <div>
                  <p className="text-sm font-medium">Product name</p>
                  <p className="text-xs">Product detail</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.6] relative">
            <div className="flex p-3 bg-[#2f374b38] border-b border-[#2f374b3b]">
              <IoPersonOutline
                style={{ fontSize: "24px", marginRight: "10px" }}
              />
              <p>John Smith</p>
            </div>
            <div></div>
            <div className="flex items-center absolute w-full bottom-0 bg-[#ebebeb] h-14">
              <div className="flex-1">
                <input
                  className="w-full bg-transparent p-3 outline-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Type your message here..."
                />
              </div>
              <div className="flex items-center pr-3">
                <IoAttachOutline
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
                <IoSendOutline style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="product_details_container md:hidden m-3 max-w-[30%] max-h-[95%] rounded-xl overflow-hidden p-4 bg-white">
          <div className="product_pics max-w-[200px] my-0 mx-auto">
            <img className="" src={require("../assets/apple1.jpeg")} alt="" />
          </div>
          <div className="product_titles text-center text-sm font-semibold">
            <h3>MacBook Pro 13-inch - Apple</h3>
          </div>
          <div className="product_details text-xs font-medium">
            <p>
              Apple in October 2021 overhauled the high-end MacBook Pro,
              introducing an entirely new design, new chips, new capabilities,
              and more. As Apple says, the revamped MacBook Pro models offer up
              extraordinary performance and the world's best notebook display.
            </p>
            <p>
              {" "}
              The 2021 MacBook Pro models come in 14.2-inch and 16.2-inch size
              options and they're equipped with mini-LED displays, more ports,
              up to 64GB memory, and more powerful Apple silicon chips, the M1
              Pro and M1 Max. In short, they are the best MacBook Pro models to
              date.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;
