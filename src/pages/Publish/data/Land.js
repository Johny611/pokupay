import React from "react";
import { Input, Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import Commisioned from "../components/Commisioned";

const purpose = [
  {
    name: "landForConstruction",
    rus: "Земля под строительство",
    eng: "Land for construction",
    uzb: "Qurilish uchun yer",
  },
  {
    name: "landForGarden",
    rus: "Земля под сад/огород",
    eng: "Land for a garden",
    uzb: "Bog' uchun yer",
  },
  {
    name: "agriculturalLand",
    rus: "Земля с/х назначения",
    eng: "Agricultural land",
    uzb: "Qishloq xo'jaligi erlari",
  },
  {
    name: "industrialLand",
    rus: "Земля промышленного назначения",
    eng: "Industrial land",
    uzb: "Sanoat erlari",
  },
  { name: "other", rus: "Другое", eng: "Other", uzb: "Boshqa" },
];

const location = [
  { name: "inCity", rus: "В городе", eng: "", uzb: "" },
  { name: "inSuburbs", rus: "В пригороде", eng: "", uzb: "" },
  { name: "inCountryside", rus: "В сельской местности", eng: "", uzb: "" },
  { name: "alongTrack", rus: "Вдоль трассы", eng: "", uzb: "" },
  { name: "nearPondRiver", rus: "Возле водоема, реки", eng: "", uzb: "" },
  { name: "inFoothills", rus: "В предгорьях", eng: "", uzb: "" },
  { name: "inSuburbanArea", rus: "В дачном массиве", eng: "", uzb: "" },
  { name: "inClosedArea", rus: "На закрытой территории", eng: "", uzb: "" },
];

const communications = [
  {
    name: "electricity",
    rus: "Электричество",
    eng: "Electricity",
    uzb: "Elektr",
  },
  { name: "water", rus: "Вода", eng: "Water", uzb: "Suv" },
  { name: "gas", rus: "Газ", eng: "Gas", uzb: "Gaz" },
  { name: "heating", rus: "Отопление", eng: "Heating", uzb: "Isitish" },
  {
    name: "sewerage",
    rus: "Канализация",
    eng: "Sewerage",
    uzb: "Kanalizatsiya",
  },
  { name: "internet", rus: "Интернет", eng: "Internet", uzb: "Internet" },
  { name: "telephone", rus: "Телефон", eng: "Telephone", uzb: "Telefon" },
];

const Land = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);
  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="area"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Площадь (соток)"
        />
      </div>
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="purpose">
          Назначение
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="purpose"
          id="purpose"
          value={publishData.purpose}
          onChange={addPublishData}
        >
          <option value=""></option>
          {purpose.map((item) => (
            <option key={item.name} id={item.name} value={item.name}>
              {item.rus}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <p>Расположение</p>
        <div className="grid grid-cols-3">
          {location.map((item) => (
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
      <div className="mt-4">
        <p>Комуникации</p>
        <div className="grid grid-cols-3">
          {communications.map((item) => (
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
      <Commisioned />
    </div>
  );
};

export default Land;
