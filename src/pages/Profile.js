import React, { useState, useEffect } from "react";
import {
  signOut,
  updateProfile,
  updatePhoneNumber,
  RecaptchaVerifier,
  PhoneAuthProvider,
} from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { logout } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  Input,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoCameraOutline } from "react-icons/io5";
import ProfileGridCard from "../components/Card/ProfileGridCard";
import ProfileRowCard from "../components/Card/ProfileRowCard";
import { updateDoc, doc, getDoc } from "firebase/firestore";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Profile = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [userDoc, setUserDoc] = useState(null);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [section, setSection] = useState("profile");
  const [displayOption, setDisplayOption] = useState("grid");
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token = sessionStorage.getItem("Auth token");
  // const [OTPInput, setOTPInput] = useState(false);
  // const [verificationCode, setVerificationCode] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPhoto, setUpdatedPhoto] = useState("");

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (userName) {
      await updateProfile(auth.currentUser, {
        displayName: userName,
      }).then(() => {
        updateDoc(doc(db, "users", auth.currentUser.uid), {
          displayName: userName,
        }).then(() => setUpdatedName("Name updated"));
      });
    }

    if (userPhoto) {
      const metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePicture/${userPhoto.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, userPhoto, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            }).then(() => {
              updateDoc(doc(db, "users", auth.currentUser.uid), {
                photoURL: downloadURL,
              }).then(() => setUpdatedPhoto("Photo uploaded"));
            });
          });
        }
      );
    }
  };

  const handlePhoneUpdate = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      phoneNumber: userNumber,
    }).then(() => setUpdatedPhone("Phone updated"));

    // 'recaptcha-container' is the ID of an element in the DOM.
    // window.applicationVerifier = new RecaptchaVerifier(
    //   "recaptcha-container",
    //   {
    //     size: "invisible",
    //     callback: (response) => {
    //       setOTPInput(true);
    //       console.log(response);
    //     },
    //   },
    //   auth
    // );
    // const provider = new PhoneAuthProvider(auth);
    // const verificationId = await provider.verifyPhoneNumber(
    //   userNumber,
    //   window.applicationVerifier
    // );

    // // Obtain the verificationCode from the user.
    // window.phoneCredential = PhoneAuthProvider.credential(
    //   verificationId,
    //   verificationCode
    // );
  };

  // const verifyOTP = (e) => {
  //   e.preventDefault();
  //   updatePhoneNumber(auth.currentUser, window.phoneCredential).catch((err) =>
  //     console.log(err)
  //   );
  // };

  useEffect(() => {
    const userDoc = async () => {
      const docs = await getDoc(doc(db, "users", auth.currentUser.uid));
      setUserDoc(docs.data());
    };

    userDoc();
  }, []);

  if (!token) {
    return <Navigate to="/auth" />;
  } else {
    return (
      <div className="flex flex-col flex-1 items-center pb-[30px] w-full bg-[#212633] text-white">
        <div className="profile_info relative flex flex-col p-3 items-center justify-center my-4 w-full">
          <div className="profile_img">
            <img
              className="w-36 h-36 xs:w-28 xs:h-28 object-cover rounded-full border border-[#febe32]"
              src={auth?.currentUser?.photoURL}
              alt="profile pic"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl">Привет, {user?.displayName}</p>
            <p className="text-xs text-gray-300 mt-1">ID: {user?.balanceID}</p>
            <p className="text-[#febe32] font-bold text-sm mt-1">
              Ваш кошелек: {userDoc?.balance} сум
            </p>
          </div>
          <div className="absolute top-0 right-0 flex w-full justify-center flex-col items-center">
            <img
              src={require("../assets/icons/info.png")}
              className="absolute top-[4%] right-[5%] w-6"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full h-full">
          <div className="flex flex-wrap justify-center gap-8 border-b border-gray-400 pb-1 w-full">
            <div
              className={`${
                section === "profile" && "text-[#febe32] border-[#febe32]"
              } hover:text-[#febe32] cursor-pointer`}>
              <p onClick={() => setSection("profile")}>Редактировать аккаунт</p>
            </div>
            <Link to="/profile/top-up-balance" className="hover:text-[#febe32]">
              Пополнить баланс
            </Link>
            <Link to="/profile/packages" className="hover:text-[#febe32]">
              Пакет тарифы
            </Link>
            <div
              className={` ${
                section === "ads" && "text-[#febe32] border-[#febe32]"
              } hover:text-[#febe32] cursor-pointer`}>
              <p onClick={() => setSection("ads")}>Мои обьявление</p>
            </div>
            <div
              className={`${
                section === "support" && "text-[#febe32]"
              } hover:text-[#febe32] cursor-pointer`}>
              <p onClick={() => setSection("support")}>Тех поддержка</p>
            </div>
          </div>
          <div className="w-full">
            {section === "profile" ? (
              <div className="flex flex-col justify-between items-center">
                <div className="flex flex-col w-[95%] my-10">
                  <div className="flex flex-col w-full">
                    <Accordion open={open === 1} className="text-white">
                      <AccordionHeader
                        className="text-white hover:text-[#febe32]"
                        onClick={() => handleOpen(1)}>
                        Изменить контактные данные
                      </AccordionHeader>
                      <AccordionBody className="text-white">
                        <div className="flex flex-col max-w-[300px]">
                          <label htmlFor="name" className="font-normal">
                            Контактное лицо
                          </label>
                          <input
                            className="outline-none bg-transparent border  mb-3 p-2 rounded-md"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Имя"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                          {updatedName && <p>{updatedName}</p>}
                        </div>
                        <button
                          onClick={handleUpdateProfile}
                          className="bg-transparent border font-semibold bg-[#8c6a20] w-[150px] my-3 p-2 rounded-md">
                          Сохранить
                        </button>
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="min-h-[40px]">
                      <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className="text-white hover:text-[#febe32]">
                        Изменить номер телефона
                      </AccordionHeader>
                      <AccordionBody className="text-white min-h-fit">
                        <div className="flex flex-col">
                          <label htmlFor="number" className="font-normal">
                            Новый номер телефона
                          </label>
                          <input
                            className="outline-none bg-transparent border mb-3 p-2 rounded-md w-[300px]"
                            type="text"
                            name="number"
                            id="number"
                            placeholder="Номер телефона"
                            value={userNumber}
                            onChange={(e) => setUserNumber(e.target.value)}
                          />
                          {updatedPhone && <p>{updatedPhone}</p>}
                          {/* {OTPInput && (
                            <div>
                              <label htmlFor="phoneNumber">
                                Verification code from SMS
                              </label>
                              <input
                                className="w-[150px] bg-transparent border py-[5px] px-2 rounded-md outline-none m-1"
                                id="phoneNumber"
                                type="text"
                                value={verificationCode}
                                onChange={(e) =>
                                  setVerificationCode(e.target.value)
                                }
                              />
                              <button
                                className="bg-[#8c6b20] py-[5px] px-[10px] rounded-md ml-1"
                                onClick={verifyOTP}
                              >
                                Verify
                              </button>
                            </div>
                          )} */}
                          <div id="recaptcha-container"></div>
                        </div>
                        <button
                          onClick={handlePhoneUpdate}
                          className="bg-transparent border font-semibold bg-[#8c6a20] my-3 p-2 rounded-md w-[150px]">
                          Сохранить
                        </button>
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="min-h-[40px]">
                      <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className="text-white hover:text-[#febe32]">
                        Изменить аватар
                      </AccordionHeader>
                      <AccordionBody className="text-white">
                        <div className="flex gap-[20px]">
                          <div className="flex flex-col items-center gap-3 border border-white p-5 rounded-md w-fit">
                            <p>Выберите фото для профиль</p>
                            <label className="text-sm" for="photoImg">
                              <IoCameraOutline
                                style={{ fontSize: "60px", cursor: "pointer" }}
                              />
                            </label>
                            <input
                              draggable
                              placeholder="фото"
                              type="file"
                              name="photo"
                              id="photoImg"
                              aria-label="File browser example"
                              onChange={(e) => setUserPhoto(e.target.files[0])}
                            />
                            {updatedPhone && <p>{updatedPhoto}</p>}
                          </div>
                        </div>
                        <button
                          onClick={handleUpdateProfile}
                          className="bg-transparent border font-semibold bg-[#8c6a20] my-3 p-2 rounded-md">
                          Сохранить
                        </button>
                      </AccordionBody>
                    </Accordion>
                  </div>
                </div>
                <button
                  className="text-white hover:bg-[#ff000012] border py-2 px-10 mt-12 mb-10 rounded-md max-w-[200px]"
                  type="submit"
                  onClick={handleSignOut}>
                  Выйти
                </button>
              </div>
            ) : (
              ""
            )}
            {section === "ads" ? (
              <div className="profile_ads_container flex flex-col items-center">
                <div className="profile_ads_header w-[95%] flex items-center justify-between m-3">
                  <p className="font-semibold text-lg">Обьявление</p>
                  <div className="flex gap-4">
                    <select
                      name="status"
                      id=""
                      className="text-white bg-transparent border border-white rounded-md py-1 px-5">
                      <option value="active" key="">
                        <p>Активные</p>
                      </option>
                      <option value="active" key="">
                        <p>Ожидающие</p>
                      </option>
                      <option value="active" key="">
                        <p>Неактивные</p>
                      </option>
                      <option value="active" key="">
                        <p>Отклоненные</p>
                      </option>
                    </select>
                    <div className="display_options flex gap-2">
                      <div onClick={() => setDisplayOption("grid")}>
                        {displayOption === "grid" ? (
                          <img
                            className="w-7 h-7 object-contain cursor-pointer"
                            src={require("../assets/icons/grid-active.png")}
                            alt=""
                          />
                        ) : (
                          <img
                            className="w-7 h-7 object-contain cursor-pointer"
                            src={require("../assets/icons/grid.png")}
                            alt=""
                          />
                        )}
                      </div>
                      <div onClick={() => setDisplayOption("row")}>
                        {displayOption === "row" ? (
                          <img
                            className="w-[25px] h-[27px] object-contain cursor-pointer"
                            src={require("../assets/icons/column-active.png")}
                            alt=""
                          />
                        ) : (
                          <img
                            className="w-[25px] h-[27px] object-contain cursor-pointer"
                            src={require("../assets/icons/column.png")}
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    displayOption === "grid"
                      ? "profile_ads_body_grid"
                      : "profile_ads_body_row"
                  } m-4`}>
                  {displayOption === "grid" ? (
                    <>
                      <ProfileGridCard />
                      <ProfileGridCard />
                      <ProfileGridCard />
                      <ProfileGridCard />
                      <ProfileGridCard />
                      <ProfileGridCard />
                    </>
                  ) : (
                    <>
                      <ProfileRowCard />
                      <ProfileRowCard />
                      <ProfileRowCard />
                      <ProfileRowCard />
                      <ProfileRowCard />
                      <ProfileRowCard />
                    </>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            {section === "support" ? "" : ""}
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
