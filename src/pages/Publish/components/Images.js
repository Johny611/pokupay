import React, { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { auth, storage } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { IoCameraOutline } from "react-icons/io5";
import { SortableElement } from "react-sortable-hoc";
import { SortableContainer } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import {
  setImages,
  setImageThumbnail,
  removeImage,
  changeOrder,
} from "../../../features/imagesSlice";

const Images = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);
  const uploadedImages = useSelector((state) => state.images.data);
  const [progress, setProgress] = useState(0);

  const handlePhotos = (e) => {
    e.preventDefault();
    const images = [...e.target.files];

    if (images.length <= 8) {
      Object.values(images).map((image) => {
        const metadata = {
          contentType: "image/jpeg",
        };
        const storageRef = ref(
          storage,
          `/users/${auth.currentUser.uid}/ads/${publishData.title}/${image.name}`
        );

        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        return uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            switch (error.code) {
              case "storage/unauthorized":
                break;
              case "storage/canceled":
                break;

              case "storage/unknown":
                break;
            }
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              dispatch(
                setImages({
                  name: image.name,
                  url: downloadURL,
                  thumbnail: false,
                })
              );
            });
          }
        );
      });
    } else {
      alert("Maximum number of photos exceeded");
    }
  };

  const setThumbnail = () => {
    if (uploadedImages.length !== 0) {
      dispatch(setImageThumbnail());
    }
  };

  const deletePhoto = (e, name) => {
    e.preventDefault();

    const imageRef = ref(
      storage,
      `/users/${auth.currentUser.uid}/ads/${publishData.title}/${name}`
    );
    deleteObject(imageRef)
      .then(() => {
        console.log("image deleted");
        dispatch(removeImage(name));
      })
      .catch((err) => console.log(err));
  };

  const Sortable = SortableElement((props) => {
    return (
      <li className="list-none">
        <div className="item-container relative bg-[#2126331c] w-[120px] h-[120px] rounded-md cursor-pointer">
          <img
            src={props.value[1]}
            className="w-full h-full object-cover"
            alt=""
          />
          <button
            onClick={(e) => deletePhoto(e, props.value[0])}
            className="absolute text-[20px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[#febe32] bg-[#212633] pt-0 pb-[3px] px-[8px] rounded-[20%]">
            x
          </button>
        </div>
      </li>
    );
  });

  const SortableList = (props) => {
    return (
      <ul className="flex flex-wrap gap-2">
        {props.items.map(({ name, url, thumbnail }, index) => (
          <Sortable
            key={`item-${index}`}
            index={index}
            value={[name, url, thumbnail]}
          />
        ))}
      </ul>
    );
  };

  const SortableCont = SortableContainer(SortableList);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (uploadedImages.length !== 0) {
      let images = [...uploadedImages];
      let ordered = arrayMoveImmutable(images, oldIndex, newIndex);
      dispatch(changeOrder(ordered));
    }
  };

  console.table(uploadedImages);

  return (
    <div>
      <h3 className="text-lg mb-4 font-medium">Фото</h3>
      <p className="text-sm mb-4">
        Первое фото будет на обложке объявления. Перетащите, чтобы изменить
        порядок.
      </p>
      <div className="flex flex-wrap gap-2">
        {uploadedImages?.length < 1 ? (
          <div className="bg-[#2126331c] w-24 h-24 rounded-md cursor-pointer">
            <label
              className="w-full h-full flex items-center justify-center"
              htmlFor="adPhoto">
              <IoCameraOutline className="text-2xl" />
            </label>
            <input
              onChange={(e) => handlePhotos(e)}
              draggable="true"
              multiple
              accept="image/heic, image/png, image/jpeg, image/jpg, image/webp"
              maxLength="8"
              type="file"
              name="adPhoto"
              id="adPhoto"
            />
          </div>
        ) : (
          <div>
            <SortableCont
              axis={"x"}
              items={uploadedImages}
              onSortEnd={onSortEnd}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Images;
