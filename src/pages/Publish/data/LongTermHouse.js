import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import { Input, Checkbox } from "@material-tailwind/react";
import Checkboxes from "../components/Checkboxes";
import Select from "../components/Select";

const houseTypes = [
  { name: "house", rus: "Дом", eng: "House", uzb: "Uy" },
  {
    name: "outbuilding",
    rus: "Флигель",
    eng: "Outbuilding",
    uzb: "Qo'shimcha qurilish",
  },
  { name: "cottage", rus: "Коттедж", eng: "Cottage", uzb: "Kottej" },
  {
    name: "partOfTheHouse",
    rus: "Часть дома",
    eng: "Part of the house",
    uzb: "Uyning bir qismi",
  },
  {
    name: "countryHouse",
    rus: "Дача",
    eng: "Country house",
    uzb: "Qishloq uyi",
  },
  { name: "townhouse", rus: "Таунхаус", eng: "Townhouse", uzb: "Shahar uyi" },
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

const water = [
  { name: "inHouse", rus: "В доме", eng: "In house", uzb: "Uyda" },
  { name: "onBorder", rus: "На границе", eng: "On border", uzb: "Chegarada" },
  {
    name: "centralWaterSupply",
    rus: "Центральное водоснабжение",
    eng: "Central water supply",
    uzb: "Markaziy suv ta'minoti",
  },
  {
    name: "summingUpPossible",
    rus: "Возможно подведение",
    eng: "Summing up is possible",
    uzb: "Xulosa qilish mumkin",
  },
  { name: "borehole", rus: "Скважина", eng: "Borehole", uzb: "Quduq" },
  {
    name: "holeOnSite",
    rus: "Колодец на участке",
    eng: "Borehole on site",
    uzb: "Uyda quduq",
  },
  { name: "no", rus: "Нет", eng: "No", uzb: "Yo'q" },
];

const electricity = [
  { name: "thereIs", rus: "Есть", eng: "There is", uzb: "Bor" },
  {
    name: "possible",
    rus: "Есть возможность подключения",
    eng: "Possible to connect",
    uzb: "Ulanish mumkin",
  },
  { name: "thereIsNot", rus: "Нет", eng: "There is not", uzb: "Yo'q" },
];

const heating = [
  { name: "central", rus: "Центральное", eng: "Central", uzb: "Markaziy" },
  { name: "onGas", rus: "На газе", eng: "On gas", uzb: "Gazda" },
  {
    name: "solidFuel",
    rus: "На твердом топливе",
    eng: "Solid fuel",
    uzb: "qattiq yoqilg'i",
  },
  {
    name: "liquidFuel",
    rus: "На жидком топливе",
    eng: "Liquid fuel",
    uzb: "Suyuq yoqilg'i",
  },
  {
    name: "electrical",
    rus: "Электрическое",
    eng: "Electrical",
    uzb: "Elektrda",
  },
  { name: "mixed", rus: "Смешанное", eng: "Mixed", uzb: "Aralash" },
  {
    name: "withoutHeating",
    rus: "Без отопления",
    eng: "Without heating",
    uzb: "Issiqliksiz",
  },
];

const gas = [
  {
    name: "magistral",
    rus: "Магистральный",
    eng: "Magistral",
    uzb: "Magistral",
  },
  { name: "autonomous", rus: "Автономный", eng: "Autonomous", uzb: "Avtonom" },
  {
    name: "possible",
    rus: "Есть возможность подключения",
    eng: "Possible to connect",
    uzb: "Ulanish mumkin",
  },
  { name: "no", rus: "Нет", eng: "No", uzb: "Yo'q" },
];

const bathroom = [
  { name: "separated", rus: "Раздельный", eng: "Separated", uzb: "Ajratilgan" },
  {
    name: "combined",
    rus: "Совмещенный",
    eng: "Combined",
    uzb: "Birlashtirilgan",
  },
  {
    name: "2bathroomsOrMore",
    rus: "2 санузла и более",
    eng: "2 bathrooms or more",
    uzb: "2 yoki undan ortiq hammom",
  },
  { name: "inYard", rus: "Во дворе", eng: "In the yard", uzb: "Hovlida" },
  { name: "no", rus: "Нет", eng: "No", uzb: "Yo'q" },
];

const inHouse = [
  { name: "garage", rus: "Гараж", eng: "Garage", uzb: "Garaj" },
  {
    name: "",
    rus: "Бытовая техника",
    eng: "Appliances",
    uzb: "Maishiy texnika",
  },
  {
    name: "swimming Pool",
    rus: "Бассейн",
    eng: "Swimming pool",
    uzb: "Suzish havzasi",
  },
  { name: "internet", rus: "Интернет", eng: "Internet", uzb: "Internet" },
  { name: "telephone", rus: "Телефон", eng: "Telephone", uzb: "Telefon" },
  {
    name: "sewerage",
    rus: "Канализация",
    eng: "Sewerage",
    uzb: "Kanalizatsiya",
  },
  { name: "garden", rus: "Огород", eng: "Garden", uzb: "Bog'" },
  { name: "security", rus: "Охрана", eng: "Security", uzb: "Xavfsizlik" },
  {
    name: "basementCloset",
    rus: "Подвал, кладовка",
    eng: "Basement, closet",
    uzb: "Podval, shkaf",
  },
  {
    name: "saunaBath",
    rus: "Сауна, баня",
    eng: "Sauna, bath",
    uzb: "Sauna, hammom",
  },
  { name: "gym", rus: "Спортзал", eng: "Gym", uzb: "Sportzal" },
  {
    name: "satelliteTelevision",
    rus: "Спутниковое телевидение",
    eng: "Satellite television",
    uzb: "Sun'iy yo'ldosh televideniesi",
  },
  {
    name: "airConditioner",
    rus: "Кондиционер",
    eng: "Air conditioner",
    uzb: "Konditsioner",
  },
];

const nearHouse = [
  {
    name: "hospitalPolyclinic",
    rus: "Больница, поликлиника",
    eng: "Hospital, polyclinic",
    uzb: "Kasalxona, poliklinika",
  },
  {
    name: "parkGreenArea",
    rus: "Парк, зелёная зона",
    eng: "Park, green area",
    uzb: "Park, yashil maydon",
  },
  {
    name: "supermarketShops",
    rus: "Супермаркет, магазины",
    eng: "Supermarket, shops",
    uzb: "Supermarket, do'konlar",
  },
  {
    name: "playground",
    rus: "Детская площадка",
    eng: "Playground",
    uzb: "O'yin maydonchasi",
  },
  {
    name: "entertainmentEstablishments",
    rus: "Развлекательные заведения",
    eng: "Entertainment establishments",
    uzb: "Ko'ngilochar muassasalar",
  },
  { name: "school", rus: "Школа", eng: "School", uzb: "Maktab" },
  {
    name: "kindergarden",
    rus: "Детский сад",
    eng: "Kindergarten",
    uzb: "Bolalar bog'chasi",
  },
  {
    name: "restaurantsCafes",
    rus: "Рестораны, кафе",
    eng: "Restaurants, cafes",
    uzb: "Restoranlar, kafelar",
  },
  {
    name: "station",
    rus: "Остановки",
    eng: "Stops",
    uzb: "Marshrut to'xtash joyi",
  },
  { name: "parking", rus: "Стоянка", eng: "Parking", uzb: "Avtoturargoh" },
];

const LongTermHouse = () => {
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
          name="roomsNumber"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Количество комнат"
        />
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="area"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Общая площадь м²"
        />
      </div>
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="houseType">
          Тип дома
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="houseType"
          id="houseType"
          value={publishData.houseType}
          onChange={addPublishData}
        >
          <option value=""></option>
          {houseTypes.map((item) => (
            <option key={item.name} value={item.name}>
              {item.rus}
            </option>
          ))}
        </select>
      </div>
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="builtYear">
          Год постройки
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="builtYear"
          id="builtYear"
          value={publishData.builtYear}
          onChange={addPublishData}
        >
          <option value=""></option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2011-2014">2011-2014</option>
          <option value="2001-2010">2001-2010</option>
          <option value="1990-2000">1990-2000</option>
          <option value="1980-1989">1980-1989</option>
          <option value="1960-1979">1960-1979</option>
          <option value="before1960">старше 1960</option>
        </select>
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="livingArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Жилая площадь м²"
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
          name="landArea"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Площадь участка (сот.)"
        />
      </div>
      <Select
        title={"Комиссионные"}
        name={"commission"}
        firstValue={"yes"}
        secondValue={"no"}
        firstDisplay={"Да"}
        secondDisplay={"Нет"}
      />
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
        <p className="text-[14px] mb-[5px]">Меблирован</p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(setPublish({ furnitured: "yes" }))}
            className={`py-[3px] w-[150px] rounded-[5px] ${
              publishData.furnitured === "yes" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
            }`}
          >
            Да
          </button>
          <button
            onClick={() => dispatch(setPublish({ furnitured: "no" }))}
            className={`py-[3px] w-[150px] rounded-[5px]  ${
              publishData.furnitured === "no" ? "bg-[#febe32]" : "bg-[#f2f2f3]"
            }`}
          >
            Нет
          </button>
        </div>
      </div>
      <div className="max-w-[300px] mt-4">
        <Input
          name="ceilingHeight"
          onChange={addPublishData}
          color="orange"
          variant="outlined"
          label="Высота потолков"
        />
      </div>

      <Checkboxes title={"Ремонт"} items={repair} />

      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="wallType">
          Тип стен
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="wallType"
          id="wallType"
          value={publishData.wallType}
          onChange={addPublishData}
        >
          <option value=""></option>
          <option value="brick">Кирпичный</option>
          <option value="panel">Панельный</option>
          <option value="monolithic">Монолитный</option>
          <option value="blocky">Шлакоблочный</option>
          <option value="wood">Деревянный</option>
          <option value="wood">Газоблок</option>
          <option value="wood">СИП панель</option>
          <option value="wood">Другое</option>
        </select>
      </div>
      <div className="mt-4">
        <p>Вода</p>
        <div className="grid grid-cols-3">
          {water.map((item) => (
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
        <p>Электричество</p>
        <div className="grid grid-cols-3">
          {electricity.map((item) => (
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
        <p>Отопление</p>
        <div className="grid grid-cols-3">
          {heating.map((item) => (
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
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="gas">
          Газ
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="gas"
          id="gas"
          value={publishData.gas}
          onChange={addPublishData}
        >
          <option value=""></option>
          {gas.map((item) => (
            <option key={item.name} id={item.name} value={item.name}>
              {item.rus}
            </option>
          ))}
        </select>
      </div>
      <div className="selectdiv flex flex-col max-w-[300px] mt-4">
        <label className="text-[14px]" for="bathroom">
          Санузел
        </label>
        <select
          className="border border-gray-500 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="bathroom"
          id="bathroom"
          value={publishData.bathroom}
          onChange={addPublishData}
        >
          <option value=""></option>
          {bathroom.map((item) => (
            <option key={item.name} id={item.name} value={item.name}>
              {item.rus}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <p>В доме / на участке есть</p>
        <div className="grid grid-cols-3">
          {inHouse.map((item) => (
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
        <p>Рядом есть</p>
        <div className="grid grid-cols-3">
          {nearHouse.map((item) => (
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
    </div>
  );
};

export default LongTermHouse;
