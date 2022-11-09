import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  query,
  collection,
  orderBy,
  limit,
  where,
  onSnapshot,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { useDispatch } from "react-redux";
import {
  removeFavourite,
  setData,
  setFavourite,
} from "../features/categorySlice";
import useScroll from "./useScroll";

const useCategoryListLoad = (queryList) => {
  const dispatch = useDispatch();
  const [offSet] = useScroll();
  // const data = useSelector((state) => state.categoryData.data);
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  let params = useParams();

  useEffect(() => {
    const moreData = async (offSet) => {
      const colRef = collection(
        db,
        "ads",
        params.category,
        params.categoryType
      );

      const next = query(
        colRef,
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(offSet)
      );

      setLoading(true);
      const querySnapshot = await getDocs(next);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);

      querySnapshot.forEach((doc) => {
        dispatch(
          setData({
            docID: doc.id,
            ...doc.data(),
          })
        );
      });

      setLoading(false);

      const token = sessionStorage.getItem("Auth token");
      const docRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "favourites"
      );

      if (token) {
        onSnapshot(docRef, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            dispatch(setFavourite(doc.id));
          });
        });
      }
    };
    moreData();
  }, [offSet]);

  useEffect(() => {
    const categoryData = async () => {
      const colRef = collection(
        db,
        "ads",
        params.category,
        params.categoryType
      );

      const q = query(
        colRef,
        where("subCategory", "==", params.categoryType),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      setLoading(true);
      const querySnapshot = await getDocs(q);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);

      querySnapshot.forEach((doc) => {
        dispatch(
          setData({
            docID: doc.id,
            ...doc.data(),
          })
        );
      });

      setLoading(false);

      const token = sessionStorage.getItem("Auth token");
      const docRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "favourites"
      );

      if (token) {
        onSnapshot(docRef, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            dispatch(setFavourite(doc.id));
          });
        });
      }
    };
    categoryData();
  }, [params.category, params.categoryType, dispatch]);

  const deleteFavourite = (removeID) => {
    dispatch(removeFavourite(removeID));
  };

  return [deleteFavourite, loading];
};

export default useCategoryListLoad;
