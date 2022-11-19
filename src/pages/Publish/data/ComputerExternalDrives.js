import React from "react";
import Options from "../components/Options";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const subCategory = [
  {
    name: "memoryCards",
    rus: "Карты памяти",
    eng: "Memory cards",
    uzb: "Xotira kartalari",
  },
  { name: "usbFlash", rus: "Usb flash", eng: "Usb flash", uzb: "Usb flesh" },
  {
    name: "externalHDs",
    rus: "Внешние жесткие диски",
    eng: "External HDs",
    uzb: "Tashqi qattiq disk",
  },
];

const ComputerExternalDrives = () => {
  const dispatch = useDispatch();
  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <Options
        itemName={"externalDriveType"}
        title={"Подкатегории"}
        items={subCategory}
      />
      <div className="max-w-[300px] mt-4">
        <Input
          name="volume"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Объём (ГБ)"
        />
      </div>
    </div>
  );
};

export default ComputerExternalDrives;
