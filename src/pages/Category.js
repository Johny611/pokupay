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
    <div className="">
      <div className="filters"></div>
      <div className="premium_ads  my-5">
        {data.map((ad) => (
          <ColumnCard
            key={ad.docID}
            //  img={}
            title={ad.title}
            address={ad.location}
            date={new Date(ad.createdAt?.seconds * 1000).toJSON()}
            // date={timestampToDate(ad.createdAt?.seconds, "yyyy-MM-dd HH:mm")}
            price={ad.priceFrom}
            currency={ad.currency}
            //  categoryPic={}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
