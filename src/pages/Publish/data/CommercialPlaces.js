import React from "react";
import Checkboxes from "../components/Checkboxes";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import Options from "../components/Options";
import Select from "../components/Select";

const propertyType = [
  {
    name: "shops/boutiques",
    rus: "Магазины/бутики",
    eng: "Shops/boutiques",
    uzb: "Do'konlar/butiklar",
  },
  { name: "salons", rus: "Салоны", eng: "Salons", uzb: "Salonlar" },
  {
    name: "restaurants/cafes/bars",
    rus: "Рестораны/кафе/бары",
    eng: "Restaurants/cafes/bars",
    uzb: "Restoranlar/kafelar/barlar",
  },
  { name: "offices", rus: "Офисы", eng: "Offices", uzb: "Ofislar" },
  { name: "warehouses", rus: "Склады", eng: "Warehouses", uzb: "Omborlar" },
  {
    name: "freeStandingBuildings",
    rus: "Отдельно стоящие здания",
    eng: "Free standing buildings",
    uzb: "Erkin binolar",
  },
  {
    name: "recreationCenters",
    rus: "Базы отдыха",
    eng: "Recreation centers",
    uzb: "Dam olish markazlari",
  },
  {
    name: "industrialPremises",
    rus: "Помещения промышленного назначения",
    eng: "Industrial premises",
    uzb: "Sanoat binolari",
  },
  {
    name: "freePremises",
    rus: "Помещения свободного назначения",
    eng: "Free premises",
    uzb: "Erkin maqsaddagi binolar",
  },
  {
    name: "SAFSmallArchitecturalForm",
    rus: "МАФ (малая архитектурная форма)",
    eng: "SAF (small architectural form)",
    uzb: "KAS (kichik arxitektura shakli)",
  },
  {
    name: "partOfTheBuilding",
    rus: "Часть здания",
    eng: "Part of the building",
    uzb: "Binoning bir qismi",
  },
  { name: "other", rus: "Другое", eng: "Other", uzb: "Boshqa" },
];

const location = [
  {
    name: "businessCenter",
    rus: "Бизнес центр",
    eng: "Business center",
    uzb: "Biznes Markazi",
  },
  {
    name: "administrativeBuilding",
    rus: "Административное здание",
    eng: "Administrative building",
    uzb: "Ma'muriy bino",
  },
  { name: "house", rus: "Жилой дом", eng: "House", uzb: "Uy" },
  { name: "cottage", rus: "Коттедж", eng: "Cottage", uzb: "Kottej" },
  {
    name: "shoppingCenter",
    rus: "Торговый центр",
    eng: "Shopping center",
    uzb: "Savdo markazi",
  },
  {
    name: "industrialArea",
    rus: "Промзона",
    eng: "Industrial area",
    uzb: "Sanoat hududi",
  },
  { name: "market", rus: "Рынок", eng: "Market", uzb: "Bozor" },
  {
    name: "freeStandingBuildings",
    rus: "Отдельно стоящие здания",
    eng: "Free standing buildings",
    uzb: "Erkin binolar",
  },
];

const repair = [
  {
    name: "author'sProject",
    rus: "Авторский проект",
    eng: "Author's project",
    uzb: "Oldindan ishlangan",
  },
  { name: "average", rus: "Средний", eng: "Average", uzb: "O'rtacha" },
  {
    name: "roughFinish",
    rus: "Черновая отделка",
    eng: "Rough finish",
    uzb: "Qo'pol tugatilgan",
  },
  {
    name: "euroRenovation",
    rus: "Евроремонт",
    eng: "Euro renovation",
    uzb: "Yevro remont",
  },
  {
    name: "repairRequired",
    rus: "Требует ремонта",
    eng: "Requires repair",
    uzb: "Ta'mirlashni talab qiladi",
  },
  {
    name: "prefinishing",
    rus: "Предчистовая отделка",
    eng: "Prefinishing",
    uzb: "Oldindan tugatilgan",
  },
];

const inBuilding = [
  { name: "internet", rus: "Интернет", eng: "Internet", uzb: "Internet" },
  { name: "telephone", rus: "Телефон", eng: "Telephone", uzb: "Telefon" },
  {
    name: "barsOnTheWindows",
    rus: "Решетки на окнах",
    eng: "Bars on the windows",
    uzb: "Derazalardagi panjaralar",
  },
  {
    name: "signaling",
    rus: "Сигнализация",
    eng: "Signaling",
    uzb: "Signalizatsiya",
  },
  {
    name: "fireAlarm",
    rus: "Пожарная сигнализация",
    eng: "Fire alarm",
    uzb: "Yong'in signalizatsiyasi",
  },
  { name: "CCTV", rus: "Видеонаблюдение", eng: "CCTV", uzb: "CCTV" },
  {
    name: "24HourSecurity",
    rus: "Круглосуточная охрана",
    eng: "24 hour security",
    uzb: "24 soat xavfsizlik",
  },
  {
    name: "entryGroup",
    rus: "Входная группа",
    eng: "Entry group",
    uzb: "Kirish guruhi",
  },
  { name: "plinth", rus: "Цоколь", eng: "Plinth", uzb: "Plintus" },
  { name: "basement", rus: "Подвал", eng: "Basement", uzb: "Podval" },
  {
    name: "allCommunications",
    rus: "Все коммуникации",
    eng: "All communications",
    uzb: "Barcha aloqalar",
  },
  { name: "furniture", rus: "Мебель", eng: "Furniture", uzb: "Mebel" },
  {
    name: "airConditioner",
    rus: "Кондиционер",
    eng: "Air conditioner",
    uzb: "Konditsioner",
  },
];

const CommercialPlaces = () => {
  const dispatch = useDispatch();
  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <Checkboxes title={"Тип недвижимости"} items={propertyType} />
      <div className="max-w-[300px] mt-4">
        <Input
          name="area"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Общая площадь м²"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="effectiveArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Полезная площадь"
        />
      </div>
      <Options itemName={"location"} title={"Расположение"} items={location} />

      <div className="max-w-[300px] mt-4">
        <Input
          name="plot"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Участок"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="floor"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этаж"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="numberOfFloors"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Этажность дома"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="roofHeight"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Высота потолков"
        />
      </div>
      <Checkboxes title={"Ремонт"} items={repair} />
      <Checkboxes title={"В помещении есть"} items={inBuilding} />
      <Select
        title={"Наличие парковки"}
        name={"parking"}
        firstValue={"yes"}
        secondValue={"no"}
        firstDisplay={"Да"}
        secondDisplay={"Нет"}
      />
      <Select
        title={"Комиссионные"}
        name={"commission"}
        firstValue={"yes"}
        secondValue={"no"}
        firstDisplay={"Да"}
        secondDisplay={"Нет"}
      />
    </div>
  );
};

export default CommercialPlaces;
