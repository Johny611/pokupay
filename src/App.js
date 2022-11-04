import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound";
import Auth from "./pages/Auth";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Chat from "./pages/Chat";
import Favourite from "./pages/Favourite";
import Profile from "./pages/Profile";
import Publish from "./pages/Publish";
import Category from "./pages/Category";
import { useDispatch, useSelector } from "react-redux";
import { auth, db, storage } from "./firebase";
import { login, logout } from "./features/userSlice";
import Header from "./components/Header/Header";
import AllCategories from "./pages/AllCategories";
import Balance from "./pages/Balance";
import Packages from "./pages/Packages";
import MobileChat from "./pages/MobileChat";
import ChatRoom from "./pages/ChatRoom";
import { registerUser } from "./app/functions";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { ref, deleteObject } from "firebase/storage";
import Product from "./pages/Product";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const uploadedImages = useSelector((state) => state.images.data);
  const publishData = useSelector((state) => state.publishData.data);
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    const handleTabClose = (event) => {
      event.preventDefault();

      if (uploadedImages.length !== 0) {
        uploadedImages.map((img) => {
          const imageRef = ref(
            storage,
            `/users/${auth.currentUser.uid}/ads/${publishData.title}/${img.name}`
          );
          return deleteObject(imageRef)
            .then(() => {
              console.log("image deleted");
            })
            .catch((err) => console.log(err));
        });
      }

      signOut(auth)
        .then(() => {
          sessionStorage.clear();
          dispatch(logout());
        })
        .catch((error) => {
          console.log(error);
        });
      return (event.returnValue = "Are you sure you want to exit?");
    };

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize, location]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            accessToken: userAuth.accessToken,
            balanceID: userAuth.providerData[0].uid.substring(1, 13),
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
            providerData: userAuth.providerData,
            uid: userAuth.uid,
            emailVerified: userAuth.emailVerified,
            isAnonymous: userAuth.isAnonymous,
          })
        );

        sessionStorage.setItem("Auth token", userAuth.accessToken);

        const userDoc = await getDoc(doc(db, "users", userAuth.uid));
        if (userDoc.data() == undefined) {
          await registerUser(userAuth.uid, {
            displayName: userAuth.displayName,
            email: userAuth.email,
            phoneNumber: userAuth.phoneNumber,
            balanceID: userAuth.providerData[0].uid,
            photoURL: userAuth.photoURL,
            uid: userAuth.uid,
            balance: 0,
            rating: 0,
            createdAt: userAuth.metadata.createdAt,
            creationTime: userAuth.metadata.creationTime,
          });
        } else {
          console.log("User exists");
        }
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app flex flex-col items-center min-h-full">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/chat"
          element={windowSize.innerWidth <= 700 ? <MobileChat /> : <Chat />}
        />
        <Route path="chat/chat-room/:roomID" element={<ChatRoom />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/top-up-balance" element={<Balance />} />
        <Route path="/profile/packages" element={<Packages />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/:category/:categoryType" element={<Category />} />
        <Route
          path="/product/:category/:categoryType/:productID"
          element={<Product />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {windowSize.innerWidth <= 768 ? <Nav /> : ""}
    </div>
  );
}

export default App;
