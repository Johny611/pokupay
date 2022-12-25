import React, { useState, useEffect } from "react";
import useMessages from "../../hooks/useMessages";
import List from "./List";
import { useDispatch } from "react-redux";
import { setActiveChat } from "../../features/activeChatSlice";

const SellList = ({ listID }) => {
  const { sellingChats } = useMessages(listID);
  const dispatch = useDispatch();

  // console.log("sellingChats", sellingChats);

  return (
    <>
      {Object.entries(sellingChats.items).map(([key, value]) => (
        <div
          key={Object.values(value)[0]}
          onClick={() =>
            dispatch(setActiveChat({ id: key, items: Object.values(value) }))
          }
        >
          <List list={Object.values(value)} />
        </div>
      ))}
    </>
  );
};

export default SellList;
