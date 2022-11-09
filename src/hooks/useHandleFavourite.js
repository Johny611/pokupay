import { setDoc, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

const useHandleFavourite = (deleteFavourite, navigate) => {
  const addFavourite = async (category, subCategory, productID) => {
    const token = sessionStorage.getItem("Auth token");
    if (!token) navigate("/auth");

    const docRef = doc(
      db,
      "users",
      auth.currentUser.uid,
      "favourites",
      productID
    );

    await setDoc(docRef, { category, subCategory, id: productID });
  };

  const removeFavourite = async (category, subCategory, productID) => {
    const token = sessionStorage.getItem("Auth token");
    if (!token) navigate("/auth");

    const docRef = doc(
      db,
      "users",
      auth.currentUser.uid,
      "favourites",
      productID
    );

    await deleteDoc(docRef, { category, subCategory, id: productID }).then(() =>
      deleteFavourite(productID)
    );
  };

  return [addFavourite, removeFavourite];
};

export default useHandleFavourite;
