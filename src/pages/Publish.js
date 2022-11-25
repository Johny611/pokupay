import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { db, auth } from "../firebase";
import {
  setDoc,
  addDoc,
  doc,
  getDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { IoChevronDownSharp, IoCaretForward } from "react-icons/io5";
import { categories } from "../components/Categories/CategoryList";
import Price from "./Publish/components/Price";
import { v4 } from "uuid";
import Vacancy from "./Publish/data/Vacancy";
import LookingForJob from "./Publish/data/LookingForJob";
import { useDispatch, useSelector } from "react-redux";
import { setPublish, clearPublish } from "../features/publishSlice";
import BusinessType from "./Publish/components/BusinessType";
import Images from "./Publish/components/Images";
import Contacts from "./Publish/components/Contacts";
import Courses from "./Publish/data/Courses";
import Jurisdic from "./Publish/data/Jurisdic";
import Financial from "./Publish/data/Financial";
import Internet from "./Publish/data/Internet";
import Cars from "./Publish/data/Cars";
import Trucks from "./Publish/data/Trucks";
import Moto from "./Publish/data/Moto";
import Bikes from "./Publish/data/Bikes";
import Spares from "./Publish/data/Spares";
import Transportation from "./Publish/data/Transportation";
import Bus from "./Publish/data/Bus";
import DailyHourlyApartment from "./Publish/data/DailyHourlyApartment";
import LongTermApartment from "./Publish/data/LongTermApartment";
import LongTermHouse from "./Publish/data/LongTermHouse";
import Room from "./Publish/data/Room";
import Land from "./Publish/data/Land";
import Garage from "./Publish/data/Garage";
import CommercialPlaces from "./Publish/data/CommercialPlaces";
import AbroadEstate from "./Publish/data/AbroadEstate";
import PhoneSpares from "./Publish/data/PhoneSpares";
import PhoneAccessories from "./Publish/data/PhoneAccessories";
import Phones from "./Publish/data/Phones";
import ComputerComponents from "./Publish/data/ComputerComponents";
import ComputerPeripherals from "./Publish/data/ComputerPeripherals";
import Monitors from "./Publish/data/Monitors";
import ComputerExternalDrives from "./Publish/data/ComputerExternalDrives";
import ComputerExpendable from "./Publish/data/ComputerExpendable";
import DigitalCameras from "./Publish/data/DigitalCameras";
import VideoCameras from "./Publish/data/VideoCameras";
import LensCameras from "./Publish/data/LensCameras";
import AccessoriesForPhotoVideoCameras from "./Publish/data/AccessoriesForPhotoVideoCameras";
import MediaPlayer from "./Publish/data/MediaPlayer";
import TV from "./Publish/data/TV";
import Projectors from "./Publish/data/Projectors";
import Mp3Players from "./Publish/data/Mp3Players";
import MusicalCenter from "./Publish/data/MusicalCenter";
import AmplifiersReceivers from "./Publish/data/AmplifiersReceivers";
import ConsoleGames from "./Publish/data/ConsoleGames";
import Laptops from "./Publish/data/Laptops";
import Microwaves from "./Publish/data/Microwaves";
import Fridge from "./Publish/data/Fridge";
import FoodProcessorsChoppers from "./Publish/data/FoodProcessorsChoppers";
import SteamersMulticookers from "./Publish/data/SteamersMulticookers";
import BreadMakers from "./Publish/data/BreadMakers";
import Dishwasher from "./Publish/data/Dishwasher";
import Tshirts from "./Publish/data/Dresses/Tshirts";
import Undershirt from "./Publish/data/Dresses/Undershirt";
import Shirts from "./Publish/data/Dresses/Shirts";
import TennisShoes from "./Publish/data/Dresses/TennisShoes";
import Hoodie from "./Publish/data/Dresses/Hoodie";
import Sweatshirt from "./Publish/data/Dresses/Sweatshirt";
import Raincoat from "./Publish/data/Dresses/Raincoat";
import LeatherJackets from "./Publish/data/Dresses/LeatherJackets";
import WinterJackets from "./Publish/data/Dresses/WinterJackets";
import SheepskinFurCoats from "./Publish/data/Dresses/SheepskinFurCoats";
import Vests from "./Publish/data/Dresses/Vests";
import Shorts from "./Publish/data/Dresses/Shorts";
import MenJoggers from "./Publish/data/Dresses/MenJoggers";
import MenJackets from "./Publish/data/Dresses/MenJackets";
import Tuxedos from "./Publish/data/Dresses/Tuxedos";
import ClassicCostumes from "./Publish/data/Dresses/ClassicCostumes";
import MenOveralls from "./Publish/data/Dresses/MenOveralls";
import MenPijama from "./Publish/data/Dresses/MenPijama";
import MenTracksuits from "./Publish/data/Dresses/MenTracksuits";
import MenSportJackets from "./Publish/data/Dresses/MenSportJackets";
import MenSportPants from "./Publish/data/Dresses/MenSportPants";
import Shapan from "./Publish/data/Dresses/Shapan";
import MenSkullcaps from "./Publish/data/Dresses/MenSkullcaps";
import Menmouslim from "./Publish/data/Dresses/Menmouslim";
import EveningDresses from "./Publish/data/Dresses/women/EveningDresses";
import EverydayDresses from "./Publish/data/Dresses/women/EverydayDresses";
import WomenPromDresses from "./Publish/data/Dresses/women/WomenPromDresses";
import WomenSundresses from "./Publish/data/Dresses/women/WomenSundresses";
import Tunics from "./Publish/data/Dresses/women/Tunics";
import Bodysuit from "./Publish/data/Dresses/women/Bodysuit";

const phoneBrands = [
  { name: "acer", value: "Acer" },
  { name: "alcatelLucent", value: "Alcatel-Lucent" },
  { name: "anydata", value: "Anydata" },
  { name: "anycool", value: "Anycool" },
  { name: "apple", value: "Apple" },
  { name: "ASUS", value: "ASUS" },
  { name: "BBK", value: "BBK" },
  { name: "benQSiemens", value: "BenQ-Siemens" },
  { name: "blackview", value: "Blackview" },
  { name: "bravis", value: "Bravis" },
  { name: "blackBerry", value: "BlackBerry" },
  { name: "daewoo", value: "Daewoo" },
  { name: "ETEN", value: "E-TEN" },
  { name: "fly", value: "Fly" },
  { name: "fujitsuSiemens", value: "Fujitsu Siemens" },
  { name: "GIGABYTE", value: "GIGABYTE" },
  { name: "google", value: "Google" },
  { name: "gresso", value: "Gresso" },
  { name: "haier", value: "Haier" },
  { name: "helio", value: "Helio" },
  { name: "highscreen", value: "Highscreen" },
  { name: "hisense", value: "Hisense" },
  { name: "HP", value: "HP" },
  { name: "HTC", value: "HTC" },
  { name: "", value: "Huawei" },
  { name: "imate", value: "i-mate" },
  { name: "lenovo", value: "Lenovo" },
  { name: "LG", value: "LG" },
  { name: "meizu", value: "Meizu" },
  { name: "mio", value: "Mio" },
  { name: "mobiado", value: "Mobiado" },
  { name: "motorola", value: "Motorola" },
  { name: "NEC", value: "NEC" },
  { name: "nokia", value: "Nokia" },
  { name: "ORSiO", value: "ORSiO" },
  { name: "palm", value: "Palm" },
  { name: "panasonic", value: "Panasonic" },
  { name: "pantech", value: "Pantech" },
  { name: "philips", value: "Philips" },
  { name: "RIM", value: "RIM" },
  { name: "rover", value: "Rover" },
  { name: "sagem", value: "Sagem" },
  { name: "samsung", value: "Samsung" },
  { name: "sharp", value: "Sharp" },
  { name: "siemens", value: "Siemens" },
  { name: "sony", value: "Sony" },
  { name: "sonyEricsson", value: "Sony Ericsson" },
  { name: "toshiba", value: "Toshiba" },
  { name: "ubiquam", value: "Ubiquam" },
  { name: "vertu", value: "Vertu" },
  { name: "voxtel", value: "Voxtel" },
  { name: "xDevice", value: "xDevice" },
  { name: "xiaomi", value: "Xiaomi" },
  { name: "prestigio", value: "Prestigio" },
  { name: "doogee", value: "Doogee" },
  { name: "nomi", value: "Nomi" },
  { name: "ZTE", value: "ZTE" },
  { name: "microsoft", value: "Microsoft" },
  { name: "oppo", value: "Oppo" },
  { name: "others", rus: "Другие", eng: "Others", uzb: "Boshqalar" },
];

const memory = [
  { rus: "4 Гб", eng: "4 GB" },
  { rus: "8 Гб", eng: "8 GB" },
  { rus: "16 Гб", eng: "16 GB" },
  { rus: "32 Гб", eng: "32 GB" },
  { rus: "64 Гб", eng: "64 GB" },
  { rus: "128 Гб", eng: "128 BG" },
  { rus: "256 Гб", eng: "256 GB" },
  { rus: "512 Гб", eng: "512 GB" },
  { rus: "1024 Гб", eng: "1024 GB" },
];

const mobileOperation = [
  { name: "Android" },
  { name: "iOS" },
  { name: "Windows Phone" },
  { name: "other", rus: "Другая", eng: "Other", uzb: "Boshqa" },
];

const Publish = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);
  const images = useSelector((state) => state.images.data);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [isCurrentSubTypeOpen, setIsCurrentSubTypeOpen] = useState(false);

  const [category, setCategory] = useState({
    category: null,
    subCategory: null,
    type: null,
  });

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  useEffect(() => {
    const addCategory = () => {
      if (category) {
        dispatch(
          setPublish({
            category: category.category?.name,
            subCategory: category.subCategory?.name,
            subType: category.type?.name,
          })
        );
      }
    };
    addCategory();
  }, [category.category, category.subCategory, category.type]);

  const previewAd = () => {};

  const submitAd = async () => {
    const colRef = collection(
      db,
      `ads/${publishData.category}/${publishData.subCategory}`
    );

    await addDoc(colRef, {
      ...publishData,
      createdAt: serverTimestamp(),
      photos: [...images],
    })
      .then((res) => {
        console.log(res);
        console.log("document uploaded");
        const userRef = doc(db, "users", auth.currentUser.uid, "ads", res.id);
        setDoc(userRef, {
          title: publishData.title,
          id: res.id,
          path: res.path,
        })
          .then(() => console.log("id uploaded to user account"))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.table(publishData);

  return (
    <div className="flex-1 m-4 rounded-md w-[80%] md:w-[95%] md:pb-12 xs:w-full max-w-[1040px]">
      <h1 className="xs:ml-4 text-2xl font-semibold mb-4 text-[#212633]">
        Создать обьявление
      </h1>
      <section className="border-t border-[#febe32] bg-white p-4">
        <h1 className="text-lg mb-4 font-medium">Опишите в подробностях</h1>
        <div>
          <p className="text-sm mb-1">Укажите название</p>
          <Input
            name="title"
            onChange={addPublishData}
            color="orange"
            label="Например Audi A6"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-4 mb-4">
          <div>
            <div
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="select_menu"
            >
              <div
                className={`select_btn flex items-center gap-8 rounded ${
                  !category.category ? "bg-[#febe32]" : "bg-[#e0e0e0]"
                } p-2 cursor-pointer`}
              >
                {!category.category ? (
                  <>
                    <span className="text-[17px] font-medium">
                      Выберите категорию
                    </span>
                    <IoChevronDownSharp className="text-[22px]" />
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-4">
                      <img
                        className="w-10"
                        src={category.category.activePic}
                        alt=""
                      />
                      <span>{category.category.rus}</span>
                    </div>
                    <IoCaretForward className="text-2xl" />
                  </>
                )}
              </div>
            </div>
          </div>

          {category.category && (
            <div>
              <div
                onClick={() => setIsSubCategoryOpen(!isSubCategoryOpen)}
                className="select_menu"
              >
                <div
                  className={`select_btn flex items-center gap-8 rounded ${
                    !category.category ? "bg-[#febe32]" : "bg-[#e0e0e0]"
                  }  p-4 cursor-pointer`}
                >
                  {!category.subCategory ? (
                    <>
                      <span className="text-[17px] font-medium">
                        Выберите подкатегорию
                      </span>
                      <IoChevronDownSharp className="text-[22px]" />
                    </>
                  ) : (
                    <>
                      <span>{category.subCategory.rus}</span>
                      <IoCaretForward className="text-[22px]" />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {category.subCategory && (
            <div>
              <div
                onClick={() => {
                  setIsCurrentSubTypeOpen(!isCurrentSubTypeOpen);
                }}
                className="select_menu"
              >
                <div
                  className={`select_btn flex items-center gap-8 rounded bg-[#febe32] p-4 cursor-pointer`}
                >
                  {category.type ? (
                    <>
                      <span>{category.type?.rus}</span>
                      <IoChevronDownSharp className="text-[22px]" />
                    </>
                  ) : (
                    <>
                      <span className="text-[17px] font-medium">
                        Выберите раздел
                      </span>
                      <IoChevronDownSharp className="text-[22px]" />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="options grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {isCategoryOpen &&
            categories.map((item) => (
              <div
                onClick={() => {
                  setCategory({
                    category: item,
                    subCategory: null,
                    type: null,
                  });
                  setIsCategoryOpen(false);
                  setIsSubCategoryOpen(true);
                }}
                key={item.name}
                className="option hover:bg-[blanchedalmond] cursor-pointer flex flex-row items-center gap-1 p-2"
              >
                <img className="w-14" src={item.pic} alt="" />
                <span className="font-medium">{item.rus}</span>
              </div>
            ))}

          {!isCategoryOpen &&
            isSubCategoryOpen &&
            category.category?.types?.map((item) => (
              <div
                onClick={() => {
                  setCategory({
                    ...category,
                    subCategory: item,
                    type: null,
                  });
                  setIsSubCategoryOpen(false);
                  setIsCurrentSubTypeOpen(true);
                }}
                key={item.name}
                className="option hover:bg-[blanchedalmond] cursor-pointer flex flex-row items-center gap-1 p-2"
              >
                <span className="font-medium">{item.rus}</span>
              </div>
            ))}

          {category.subCategory &&
            isCurrentSubTypeOpen &&
            category.subCategory?.types?.map((item) => (
              <div
                onClick={() => {
                  setCategory({ ...category, type: item });
                  setIsCurrentSubTypeOpen(false);
                }}
                key={item.name}
                className="option hover:bg-[blanchedalmond] cursor-pointer flex flex-row items-center gap-1 p-2"
              >
                <span className="font-medium">{item.rus}</span>
              </div>
            ))}
        </div>
      </section>
      <section className="border-t-2 border-[#febe32] bg-white p-4">
        <Images />
      </section>
      <section className="border-t-2 border-[#febe32] bg-white p-4">
        <h3 className="text-lg mb-4 font-medium">Описание</h3>
        <textarea
          value={publishData.description}
          onChange={addPublishData}
          name="description"
          id="description"
          className="border-b-2 border-[#febe32] resize-none rounded-[3px] bg-[#2126330f] w-[80%] md:w-[90%] xs:w-full min-h-[150px] outline-none p-3"
          placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"
        ></textarea>
      </section>

      {/* <Price /> */}

      <section className="border-t-2 border-[#febe32] bg-white p-4">
        <h3 className="text-lg mb-4 font-medium">Дополнительная информация</h3>
        <BusinessType />
        <div>
          {/* <Vacancy /> */}
          {/* <LookingForJob /> */}
          {/* <Courses /> */}
          {/* <Jurisdic /> */}
          {/* <Financial /> */}
          {/* <Internet /> */}
          {/* <Cars /> */}
          {/* <Trucks /> */}
          {/* <Moto /> */}
          {/* <Bikes /> */}
          {/* <Spares /> */}
          {/* <Transportation /> */}
          {/* <Bus /> */}
          {/* <DailyHourlyApartment /> */}
          {/* <LongTermApartment /> */}
          {/* <LongTermHouse /> */}
          {/* <Room /> */}
          {/* <Land /> */}
          {/* <Garage /> */}
          {/* <CommercialPlaces /> */}
          {/* <AbroadEstate /> */}
          {/* <PhoneSpares /> */}
          {/* <PhoneAccessories /> */}
          {/* <Phones /> */}
          {/* <ComputerComponents /> */}
          {/* <ComputerPeripherals /> */}
          {/* <Monitors /> */}
          {/* <ComputerExternalDrives /> */}
          {/* <ComputerExpendable /> */}
          {/* <DigitalCameras /> */}
          {/* <VideoCameras /> */}
          {/* <LensCameras /> */}
          {/* <AccessoriesForPhotoVideoCameras /> */}
          {/* <MediaPlayer /> */}
          {/* <TV /> */}
          {/* <Projectors /> */}
          {/* <Mp3Players /> */}
          {/* <MusicalCenter /> */}
          {/* <AmplifiersReceivers /> */}
          {/* <ConsoleGames /> */}
          {/* <Laptops /> */}
          {/* <Microwaves /> */}
          {/* <Fridge /> */}
          {/* <FoodProcessorsChoppers /> */}
          {/* <SteamersMulticookers /> */}
          {/* <BreadMakers /> */}
          {/* <Dishwasher /> */}
          {/* <Tshirts /> */}
          {/* <Undershirt /> */}
          {/* <Shirts /> */}
          {/* <TennisShoes /> */}
          {/* <Hoodie /> */}
          {/* <Sweatshirt /> */}
          {/* <Raincoat /> */}
          {/* <LeatherJackets /> */}
          {/* <WinterJackets /> */}
          {/* <SheepskinFurCoats /> */}
          {/* <Vests /> */}
          {/* <Shorts /> */}
          {/* <MenJoggers /> */}
          {/* <MenJackets /> */}
          {/* <Tuxedos /> */}
          {/* <ClassicCostumes /> */}
          {/* <MenOveralls /> */}
          {/* <MenPijama /> */}
          {/* <MenTracksuits /> */}
          {/* <MenSportJackets /> */}
          {/* <MenSportPants /> */}
          {/* <Shapan /> */}
          {/* <MenSkullcaps /> */}
          {/* <Menmouslim /> */}
          {/* <EveningDresses /> */}
          {/* <EverydayDresses /> */}
          {/* <WomenPromDresses /> */}
          {/* <WomenSundresses /> */}
          {/* <Tunics /> */}
          <Bodysuit />
        </div>
      </section>

      <section className="border-t-2 border-[#febe32] bg-white p-4">
        <h3 className="text-lg mb-4 font-medium">Местоположение</h3>
        <input
          onChange={addPublishData}
          className="bg-[#f2f2f3] outline-none p-3 rounded-[3px] min-w-[40%] md:min-w-[50%] xs:min-w-full"
          type="text"
          name="location"
          id=""
          placeholder="Название города или индекс"
        />
      </section>
      <section className="border-t-2 border-[#febe32] bg-white p-4">
        <h3 className="text-lg mb-4 font-medium">Контактная информация</h3>
        <Contacts />
      </section>
      <section className=" flex justify-end xs:justify-center gap-4 border-t border-[#febe32] bg-white p-4">
        <Button onClick={previewAd} color="orange" variant="outlined">
          Предпросмотр
        </Button>
        <Button onClick={submitAd} color="orange">
          Опубликовать
        </Button>
      </section>
    </div>
  );
};

export default Publish;
