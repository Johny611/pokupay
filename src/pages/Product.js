import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Textarea, Typography, Button } from "@material-tailwind/react";
import { doc, getDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/database";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import timestampToDate from "timestamp-to-date";
import {
  IoEye,
  IoHeartOutline,
  IoHeartSharp,
  IoAlertCircleOutline,
  IoCall,
  IoAttachSharp,
} from "react-icons/io5";
import useMessages from "../hooks/useMessages";

const Product = () => {
  const language = useSelector((state) => state.language.data);
  const [chatImage, setChatImage] = useState(null);
  const [product, setProduct] = useState({});
  const params = useParams();
  let user = useSelector((state) => state.user.user);
  const [message, setMessage] = useState("");
  const { sendMessageFromProduct } = useMessages();

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(
        db,
        "ads",
        params.category,
        params.categoryType,
        params.productID
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getProduct();
  }, []);
  console.log(product);

  const handleMessage = async (e) => {
    e.preventDefault();
    const data = {
      content: message,
      displayName: user.displayName,
      sentBy: user.uid,
      createdAt: serverTimestamp(),
      type: "text",
      forBuy: `ads/${params.category}/${params.categoryType}/${params.productID}`,
      productName: product.title,
      photoURL: product.photos[0].url,
      read: false,
    };
    sendMessageFromProduct(data, user.uid, params.productID);
    setMessage("");
    // toast here
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex-1 w-[80%] xm:w-full max-w-5xl my-4 xm:my-0 grid grid-cols-12 grid-rows-1 gap-4 place-items-stretch">
      <div className="col-span-8 md:col-span-12">
        <div className="img_container bg-white pb-8 px-8 xm:px-0 rounded-md">
          <div className="flex justify-between py-4 xm:py-2 xm:px-2">
            <Typography className="text-3xl font-normal" variant="h4">
              {product.title}
            </Typography>
            <Typography className="text-2xl font-semibold mb-3" variant="h4">
              {product.price || product.fromPrice}
              {product.currency === "sum" ? `сум` : `$`}
            </Typography>
          </div>
          <Slider {...settings} className="">
            {product?.photos?.map((item) => (
              <img
                src={item.url}
                alt={item.name}
                className="w-full object-contain"
              />
            ))}
          </Slider>
        </div>
        <div className="description_comments bg-white my-4 mx-0 rounded-md">
          <div className="flex justify-between items-center border-b">
            <div className="flex">
              <Typography
                className="border-b-[3px] border-[#febe32] px-8 py-[8px] text-[#febe32] text-base"
                variant="lead"
              >
                Описание
              </Typography>
              <Typography className="px-8 py-[8px] text-base" variant="lead">
                Комментарии
              </Typography>
            </div>
            <div className="text-[25px] px-3">
              <IoHeartOutline />
              {/* <IoHeartSharp /> */}
            </div>
          </div>
          <div className="">
            <div className="product_details p-4 flex gap-3">
              <Typography
                variant="small"
                className="p-[8px] rounded-[5px] bg-[#21263321]"
              >
                {params.category}
              </Typography>
              <Typography
                variant="small"
                className="p-[8px] rounded-[5px] bg-[#21263321]"
              >
                {params.categoryType}
              </Typography>
            </div>
            <div className="description p-4">
              <Typography variant="small">{product.description}</Typography>
            </div>
            <div className="py-4 pr-3 pl-3 flex justify-between gap-4 border-t border-[#febe32]">
              <Typography variant="small" className="flex text-gray-700">
                <IoEye style={{ fontSize: "19px" }} /> 1099
              </Typography>
              <Typography variant="small" className="text-gray-700">
                Опубликовано{" "}
                {timestampToDate(
                  product.createdAt?.seconds * 1000,
                  "yyyy-MM-dd"
                )}
              </Typography>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <img
                className="w-11 h-11 object-contain"
                src={require("../assets/icons/user.png")}
              />
              <div>
                <Typography variant="small" className="text-base">
                  Имя пользователя
                </Typography>
                <Typography
                  variant="small"
                  className="text-[11px] text-gray-700 "
                >
                  На PokuPay с январь 2021
                </Typography>
                <Typography
                  variant="small"
                  className="text-[10px] text-[#d89400]"
                >
                  Онлайн в 9:55
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoCall className="text-[#febe32] text-2xl" />
              <Typography
                className="font-semibold underline cursor-pointer"
                variant="small"
              >
                +998XX XXX XXXX
              </Typography>
            </div>
          </div>
          <div className="my-3">
            <Textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              color="orange"
              label="Напишите сообщение..."
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col items-stretch ">
              <div>
                <label className="flex text-sm cursor-pointer" for="chatImage">
                  <IoAttachSharp className="text-3xl" />
                  <div>
                    <p className="text-[13px]">Прикрепить файл</p>
                    <p className="text-xs text-gray-700">
                      Вы можете прикрепить файлы в формате: jpg, jpeg, png
                    </p>
                  </div>
                </label>
                <input
                  draggable
                  placeholder="фото"
                  type="file"
                  name="photo"
                  id="chatImage"
                  aria-label="File browser example"
                  onChange={(e) => setChatImage(e.target.files)}
                />
              </div>
              <div className="flex items-center bg-[#febe3226] rounded-sm gap-2 mt-2 py-[5px] px-[10px]">
                <IoAlertCircleOutline className="text-[20px] text-[#febe32]" />
                <p className="text-[11px] text-[#a16f00]">
                  Можно добавить не более 5 файлов
                </p>
              </div>
            </div>
            <div>
              <Button onClick={handleMessage} variant="outlined" color="orange">
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="side col-span-4 md:col-span-12">
        <div className="user bg-white p-3 rounded-md">
          <div className="flex gap-4 mb-4">
            <div>
              <img
                src={require("../assets/icons/user.png")}
                className="w-10 object-contain rounded-full"
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="text-base font-semibold text-[#212633]"
              >
                Имя пользователя
              </Typography>
              <Typography variant="small" className="text-xs text-gray-700">
                На PokuPay с январь 2021
              </Typography>
              <Typography
                variant="small"
                className="text-[13px] text-[#212633] font-semibold "
              >
                Онлайн в 9:55
              </Typography>
            </div>
          </div>
          <div>
            <div className="flex gap-[8px] items-center m-2">
              <img src={require("../assets/icons/phone.png")} />
              <Typography variant="small" className="font-semibold">
                +9989********
              </Typography>
            </div>
            <div className="flex gap-[8px] items-center m-2">
              <img
                src={require("../assets/icons/location1.png")}
                className="ml-1"
              />
              <Typography variant="small" className="font-semibold">
                Ташкент, Мирзо Улугбек
              </Typography>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <Link
              to={`/chat`}
              className="bg-[#febe32] py-[10px] px-[20px] font-semibold rounded-md w-1/2 text-center"
            >
              Написать
            </Link>
            <Link
              to={`/profile`}
              className="bg-[#febe32] py-[10px] px-[20px] font-semibold rounded-md w-1/2 text-center"
            >
              Профиль
            </Link>
          </div>
        </div>
        <div className="rating_box bg-white my-[10px] rounded-md p-[10px] text-center">
          <Typography variant="small" className="text-[#212633] font-semibold">
            Рейтинг 4.5
          </Typography>
        </div>
        <div className="buy_box bg-white flex flex-col gap-4 p-[10px] rounded-md text-center ">
          <div className="flex gap-2 justify-end items-center">
            <Typography variant="small" className="text-red-700">
              Скоро будет доступно
            </Typography>
            <IoAlertCircleOutline className="text-[25px] text-red-700" />
          </div>
          <Typography variant="small">
            Этот продавец может отправить товар с доставкой
          </Typography>
          <Link
            className="bg-[#febe32] p-[10px] rounded-md font-semibold"
            to={`/product/${params.category}/${params.categoryType}/${params.productID}`}
          >
            Купить с доставкой
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
