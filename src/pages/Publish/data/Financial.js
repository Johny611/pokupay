import { Input } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Financial = () => {
  const publishData = useSelector((state) => state.publishData.data);
  const dispatch = useDispatch();

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

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
      <div className="mt-6 ml-1">
        <Input
          name="company"
          onChange={addPublishData}
          color="orange"
          variant="standard"
          label="Название компании"
        />
      </div>
    </div>
  );
};

export default Financial;
