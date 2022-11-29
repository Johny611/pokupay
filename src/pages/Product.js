import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import timestampToDate from "timestamp-to-date";

const Product = () => {
  const language = useSelector((state) => state.language.data);
  const [product, setProduct] = useState({});
  const params = useParams();

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
              {product.price || product.fromPrice}{" "}
              {product.currency === "sum" ? `сум` : `$`}
            </Typography>
          </div>
          <Slider {...settings}>
            {product?.photos?.map((item) => (
              <div>
                <img src={item.url} alt={item.name} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="description_comments bg-white my-4 mx-0 rounded-md">
          <div className="flex gap-8 border-b border-[#80808052] pt-4">
            <Typography
              className="border-b-[3px] border-[#febe32] pb-4 px-8 text-[#febe32]"
              variant="lead"
            >
              Описание
            </Typography>
            <Typography variant="lead">Комментарии</Typography>
          </div>
          <div className="">
            <div className="product_details p-4 flex gap-3">
              <Typography
                variant="small"
                className="p-[8px] rounded-[5px] bg-[#febe32]"
              >
                {params.category}
              </Typography>
              <Typography
                variant="small"
                className="p-[8px] rounded-[5px] bg-[#febe32]"
              >
                {params.categoryType}
              </Typography>
            </div>
            <div className="description p-4">
              <Typography variant="small">{product.description}</Typography>
            </div>
            <div className="py-4 pl-2 flex gap-4">
              <Typography variant="small" className="text-gray-500">
                Просмотров 1099
              </Typography>
              <Typography variant="small" className="text-gray-500">
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
      <div className="col-span-4">Side</div>
    </div>
  );
};

export default Product;
