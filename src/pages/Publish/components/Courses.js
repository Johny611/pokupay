import { Input } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Courses = () => {
  const publishData = useSelector((state) => state.publishData.data);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[250px] mt-6 mb-2">
      <Input
        type="number"
        name="price"
        value={publishData.price}
        onChange={(e) =>
          dispatch(setPublish({ [e.target.name]: e.target.value }))
        }
        color="orange"
        label="Цена"
      />
    </div>
  );
};

export default Courses;
