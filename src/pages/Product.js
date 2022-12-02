import React, { useState, useEffect } from "react";
import { Tooltip, Typography } from "@material-tailwind/react";
import { doc, getDoc } from "firebase/firestore";
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
} from "react-icons/io5";

const Product = () => {
  const language = useSelector((state) => state.language.data);
  const [product, setProduct] = useState({});
  const params = useParams();
  let user = useSelector((state) => state.user.user);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex-1 w-[80%] max-w-5xl my-4 grid grid-cols-12 grid-rows-1 gap-4 place-items-stretch">
      <div className="col-span-8">
        <div className="img_container bg-white pb-8 pl-8 pr-8 rounded-md">
          <div className="flex justify-between py-4">
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
          <div className="flex justify-between items-center gap-8 border-b">
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
      </div>
      <div className="side col-span-4">
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
