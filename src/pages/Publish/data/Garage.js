import React from "react";
import Options from "../components/Options";
import { Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import Commisioned from "../components/Commisioned";

const type = [
  { name: "garage", rus: "Гараж", eng: "Garage", uzb: "Garaj" },
  {
    name: "parkingPlace",
    rus: "Место на паркинге",
    eng: "Parking place",
    uzb: "Avtoturargoh",
  },
];

const purpose = [
  { name: "cars", rus: "Легковые авто", eng: "Cars", uzb: "Avtomobillar" },
  { name: "minivan", rus: "Минивен", eng: "Minivan", uzb: "Mikroavtobus" },
  {
    name: "trucks",
    rus: "Грузовые авто",
    eng: "Trucks",
    uzb: "Yuk mashinalari",
  },
  {
    name: "yacht/boat",
    rus: "Яхта/катер",
    eng: "Yacht/boat",
    uzb: "Yaxta / qayiq",
  },
  { name: "moto", rus: "Мото", eng: "Moto", uzb: "Moto" },
];

const Garage = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);
  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <Options itemName="type" title={"Тип"} items={type} />
      <Options itemName="purpose" title={"Назначение"} items={purpose} />

      <div className="max-w-[300px] mt-4">
        <Input
          name="carSpaces"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Машиномест"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="area"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Площадь м²"
        />
      </div>
      <Commisioned />
    </div>
  );
};

export default Garage;
