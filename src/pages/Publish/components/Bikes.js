import React from "react";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import Condition from "./Condition";

const Bikes = () => {
  const dispatch = useDispatch();

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div className="">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-wrap gap-4 my-3">
          <Condition />
        </div>
        <div>
          <Input
            name="year"
            onChange={addPublishData}
            color="orange"
            variant="standard"
            label="Год выпуска"
          />
        </div>
        <div>
          <Input
            name="model"
            onChange={addPublishData}
            color="orange"
            variant="standard"
            label="Модель"
          />
        </div>
      </div>
    </div>
  );
};

export default Bikes;
