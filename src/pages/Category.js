import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import timestampToDate from "timestamp-to-date";
import ColumnCard from "../components/Card/ColumnCard";
import Vacancies from "../components/Filters/Vacancies";

const Category = () => {
  const [data, setData] = useState([]);
  let params = useParams();

  useEffect(() => {
    const categoryData = async () => {
      const q = query(
        collection(db, "ads", params.category, params.categoryType),
        where("subCategory", "==", params.categoryType)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setData((prev) => [
          ...prev,
          {
            docID: doc.id,
            ...doc.data(),
          },
        ]);
      });
    };
    categoryData();
  }, []);

  console.table(data);
  return (
    <div className="flex-1 xs:w-[95%] w-[80%] max-w-[1024px]">
      <div className="filters">
        {params.categoryType === "vacancies" && <Vacancies />}
      </div>
      <div className="premium_ads my-5">
        {data.map((ad) => (
          <ColumnCard
            key={ad.docID}
            category={ad.category}
            subCategory={ad.subCategory}
            productID={ad.docID}
            img={ad.photos[0]?.url || require("../assets/placeholder.png")}
            title={ad.title}
            address={ad.location}
            date={timestampToDate(
              ad.createdAt?.seconds * 1000,
              "yyyy-MM-dd HH:mm"
            )}
            price={`от${ad.fromPrice} до${ad.priceTo}` || ad.price}
            currency={ad.currency}
            //  categoryPic={}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
