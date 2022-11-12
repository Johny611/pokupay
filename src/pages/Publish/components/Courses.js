import { Input } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const courses = [
  { name: "driving", rus: "Автовождения", eng: "Driving", uzb: "Haydovchilik" },
  {
    name: "actingSkills",
    rus: "Актерского мастерства",
    eng: "Acting skills",
    uzb: "Aktyorlik mahorati",
  },
  {
    name: "accountants",
    rus: "Бухгалтеров",
    eng: "Accountants",
    uzb: "Buxgalterlar",
  },
  {
    name: "makeupArtistsStylists",
    rus: "Визажистов, стилистов",
    eng: "Makeup artists, stylists",
    uzb: "Pardoz san'atkorlari, stilistlar",
  },
  {
    name: "landscapeDesigners",
    rus: "Дизайнеров по ландшафту",
    eng: "Landscape designers",
    uzb: "Landshaft dizaynerlari",
  },
  {
    name: "interiorDesigners",
    rus: "Дизайнеров по интерьеру",
    eng: "Interior designers",
    uzb: "Interyer dizaynerlari",
  },
  {
    name: "development",
    rus: "Разработки",
    eng: "Development",
    uzb: "Dasturlash",
  },
  {
    name: "computer",
    rus: "Компьютерные",
    eng: "Computer",
    uzb: "Komputer savodxonligi",
  },
  { name: "babysitter", rus: "Нянь", eng: "Babysitter", uzb: "Enaga" },
  {
    name: "hairdressers",
    rus: "Парикмахеров",
    eng: "Hairdressers",
    uzb: "Sartaroshlar",
  },
  { name: "pilots", rus: "Пилотов", eng: "Pilots", uzb: "Uchuvchilar" },
  {
    name: "manicurePedicure",
    rus: "По маникюру, педикюру",
    eng: "Manicure, pedicure",
    uzb: "Manikyur, pedikyur",
  },
  {
    name: "psychology",
    rus: "По психологии",
    eng: "Psychology",
    uzb: "Psixologiya",
  },
  {
    name: "chefsAndConfectioners",
    rus: "Поваров и кондитеров",
    eng: "Chefs and confectioners",
    uzb: "Oshpazlar va qandolatchilar",
  },
  {
    name: "sewingAndNeedlework",
    rus: "Шитья и рукоделия",
    eng: "Sewing and needlework",
    uzb: "Tikuv va tikuvchilik",
  },
  {
    name: "musicalTrainingAndSinging",
    rus: "Музыкальное обучение и пение",
    eng: "Musical training and singing",
    uzb: "Musiqiy tayyorgarlik va qo'shiq aytish",
  },
  {
    name: "studyAbroad",
    rus: "Обучение за рубежом",
    eng: "Study abroad",
    uzb: "Chet elda o'qish",
  },
  { name: "dancing", rus: "Танцы", eng: "Dancing", uzb: "Raqs" },
  { name: "language", rus: "Языковые", eng: "Language", uzb: "Tillar" },
  {
    name: "tutoring",
    rus: "Репетиторство",
    eng: "Tutoring",
    uzb: "Repetitorlik",
  },
  { name: "forKids", rus: "Для детей", eng: "For kids", uzb: "Bolalar uchun" },
  { name: "sport", rus: "Спорт", eng: "Sport", uzb: "Sport" },
  { name: "other", rus: "Разное", eng: "Other", uzb: "Boshqa" },
];

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
      <div className="selectdiv flex flex-col mt-4">
        <label className="text-[14px]" for="courseType">
          Курсы
        </label>
        <select
          className="border border-gray-400 rounded-md py-[8px] px-[5px] outline-none text-black"
          name="courseType"
          id="courseType"
          value={publishData.courseType}
          onChange={(e) =>
            dispatch(setPublish({ [e.target.name]: e.target.value }))
          }
        >
          <option value=""></option>
          {courses.map((item) => (
            <option key={item.name} value={item.name}>
              {item.rus}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Courses;
