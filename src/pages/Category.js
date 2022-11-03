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
import ColumnCard from "../components/Card/ColumnCard";

const Category = () => {
  const [data, setData] = useState([]);
  let params = useParams();

  Timestamp.toString();

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

  const convertTimestamp = (timestamp) => {
    let date = timestamp.toDate();
    let mm = date.getMonth();
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    date = mm + "/" + dd + "/" + yyyy;
    return date;
  };

  console.table(data);
  return (
    <div className="">
      <div className="filters"></div>
      <div className="premium_ads  my-5">
        {data.map((ad) => {
          function convertDate(time) {
            //time should be server timestamp seconds only
            let dateInMillis = time * 1000;
            let date = new Date(dateInMillis);
            let myDate = date.toLocaleDateString();
            let myTime = date.toLocaleTimeString();
            myDate = myDate.replaceAll("/", "-");
            return myDate + " " + myTime;
          }
          let date = convertDate(ad.createdAt);
          return (
            <ColumnCard
              key={ad.docID}
              //  img={}
              title={ad.title}
              address={ad.location}
              // date={new Date(ad.createdAt?.seconds * 1000).toJSON()}
              date={date}
              price={ad.priceFrom}
              currency={ad.currency}
              //  categoryPic={}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
