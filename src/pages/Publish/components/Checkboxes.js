import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Checkboxes = ({ title, items }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <p>{title}</p>
      <div className="grid grid-cols-3">
        {items.map((item) => (
          <Checkbox
            key={item.name}
            defaultChecked={false}
            name={item.name}
            onChange={(e) =>
              dispatch(setPublish({ [e.target.name]: e.target.checked }))
            }
            id={item.name}
            color="orange"
            label={item.rus}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;
