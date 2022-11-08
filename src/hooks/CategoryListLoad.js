import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  query,
  collection,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../firebase";

const CategoryListLoad = (queryList) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let params = useParams();

  useEffect(() => {
    const categoryData = async () => {
      if (queryList) {
        const initialQueryList = [
          {
            property: "",
            operator: "",
            value: "",
          },
        ];

        const queryConditions = queryList.map((condition) => {
          where(condition.property, condition.operator, condition.value);
        });

        const queryToPerform = query(
          collection(db, "ads", params.category, params.categoryType),
          ...queryConditions
        );
      }

      const q = query(
        collection(db, "ads", params.category, params.categoryType),
        where("subCategory", "==", params.categoryType)
      );
      setLoading(true);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setData((prev) => [
          ...prev,
          {
            docID: doc.id,
            ...doc.data(),
          },
        ]);
      });
      setLoading(false);

      const token = sessionStorage.getItem("Auth token");
      const docRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "favourites"
      );
      //   const userDoc = await getDocs(docRef);

      if (token) {
        onSnapshot(docRef, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setData((prev) =>
              prev.map((post) => {
                if (doc.id === post.docID) {
                  return { ...post, favourite: true };
                } else {
                  return { ...post };
                }
              })
            );
          });
        });
      }
    };
    categoryData();
  }, [params.category, params.categoryType]);

  const deleteFavourite = (removeID) => {
    setData((prev) =>
      prev.map((post) => {
        if (post.docID === removeID) {
          return { ...post, favourite: false };
        } else {
          return { ...post };
        }
      })
    );
  };

  return [data, deleteFavourite, loading];
};

export default CategoryListLoad;
