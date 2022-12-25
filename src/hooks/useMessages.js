import { useState, useEffect } from "react";
import {
  ref,
  get,
  remove,
  onValue,
  child,
  push,
  update,
  onDisconnect,
  set,
} from "firebase/database";
import { doc, setDoc } from "firebase/firestore";
import { database, auth, db } from "../firebase";
import { useSelector } from "react-redux";

const useMessages = (listID, directory, activeChat) => {
  const user = useSelector((state) => state.user.user);
  const [sellingChats, setSellingChats] = useState({ id: "", items: [] });
  const [buyingsChats, setBuyingsChats] = useState({ id: "", items: [] });
  const [unReadMessages, setUnreadMessages] = useState(0);
  const [lastMsg, setLastMsg] = useState({});
  const [userData, setUserData] = useState(null);

  const sendMessageFromProduct = async (data, userUID, productID) => {
    await push(ref(database, `chats/${productID}/${userUID}`), data).then(
      () => {
        const userRef = doc(
          db,
          "users",
          auth.currentUser.uid,
          "chats",
          productID
        );
        setDoc(userRef, {
          ref: productID,
        })
          .then(() => console.log("chat id uploaded to user account"))
          .catch((err) => console.log(err));
      }
    );
  };

  useEffect(() => {
    const unsub = onValue(
      ref(database, `chats/${listID}`),
      (snapshot) => {
        if (snapshot.exists()) {
          setSellingChats({ id: snapshot.key, items: snapshot.val() });
          // onDisconnect(ref(database, `chats/${listID}`)).remove()
        }
      },
      {
        onlyOnce: false,
      }
    );
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const unsub = onValue(
      ref(database, `chats/${listID}${directory && `/${directory}`}`),
      (snapshot) => {
        if (snapshot.exists()) {
          setBuyingsChats({
            id: snapshot.key,
            items: Object.values(snapshot.val()),
          });
        }
      },
      {
        onlyOnce: false,
      }
    );
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const initialData = () => {
      setUnreadMessages(0);
      buyingsChats.items.map((data, i, arr) => {
        data.read === false && setUnreadMessages((prevNum) => prevNum + 1); // unread messages
        arr.length - 1 === i && setLastMsg(data); // last message

        if (userData === null) {
          data.sentBy !== user.uid &&
            setUserData({ name: data.displayName, product: data.productName }); // user info
        }
      });
    };
    initialData();
  }, [buyingsChats]);

  return {
    sendMessageFromProduct,
    buyingsChats,
    sellingChats,
    unReadMessages,
    lastMsg,
    userData,
  };
};

export default useMessages;
