import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Product = () => {
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

  return (
    <div className="flex-1 grid grid-cols-12 grid-rows-1 gap-4 place-items-stretch">
      <div className="col-span-8">Main</div>
      <div className="col-span-4">Side</div>
    </div>
  );
};

export default Product;
