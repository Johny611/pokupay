import React from "react";
import Options from "../components/Options";

const brand = [
  { name: "Akai", rus: "Akai", eng: "Akai", uzb: "Akai" },
  { name: "Akira", rus: "Akira", eng: "Akira", uzb: "Akira" },
  { name: "BBK", rus: "BBK", eng: "BBK", uzb: "BBK" },
  {
    name: "Cambridge Audio",
    rus: "Cambridge Audio",
    eng: "Cambridge Audio",
    uzb: "Cambridge Audio",
  },
  { name: "Daewoo", rus: "Daewoo", eng: "Daewoo", uzb: "Daewoo" },
  { name: "Denon", rus: "Denon", eng: "Denon", uzb: "Denon" },
  { name: "Dex", rus: "Dex", eng: "Dex", uzb: "Dex" },
  { name: "Digital", rus: "Digital", eng: "Digital", uzb: "Digital" },
  { name: "Eplutus", rus: "Eplutus", eng: "Eplutus", uzb: "Eplutus" },
  { name: "Ergo", rus: "Ergo", eng: "Ergo", uzb: "Ergo" },
  { name: "Erisson", rus: "Erisson", eng: "Erisson", uzb: "Erisson" },
  { name: "Gemix", rus: "Gemix", eng: "Gemix", uzb: "Gemix" },
  { name: "General", rus: "General", eng: "General", uzb: "General" },
  {
    name: "Harman/Kardon",
    rus: "Harman/Kardon",
    eng: "Harman/Kardon",
    uzb: "Harman/Kardon",
  },
  { name: "Hyundai", rus: "Hyundai", eng: "Hyundai", uzb: "Hyundai" },
  { name: "JVC", rus: "JVC", eng: "JVC", uzb: "JVC" },
  { name: "Kenwood", rus: "Kenwood", eng: "Kenwood", uzb: "Kenwood" },
  { name: "LG", rus: "LG", eng: "LG", uzb: "LG" },
  { name: "Loeffen", rus: "Loeffen", eng: "Loeffen", uzb: "Loeffen" },
  { name: "Marantz", rus: "Marantz", eng: "Marantz", uzb: "Marantz" },
  { name: "Meridian", rus: "Meridian", eng: "Meridian", uzb: "Meridian" },
  { name: "Mustek", rus: "Mustek", eng: "Mustek", uzb: "Mustek" },
  { name: "Mystery", rus: "Mystery", eng: "Mystery", uzb: "Mystery" },
  { name: "NAD", rus: "NAD", eng: "NAD", uzb: "NAD" },
  { name: "Odeon", rus: "Odeon", eng: "Odeon", uzb: "Odeon" },
  { name: "Panasonic", rus: "Panasonic", eng: "Panasonic", uzb: "Panasonic" },
  { name: "Phantom", rus: "Phantom", eng: "Phantom", uzb: "Phantom" },
  { name: "Philips", rus: "Philips", eng: "Philips", uzb: "Philips" },
  { name: "Pioneer", rus: "Pioneer", eng: "Pioneer", uzb: "Pioneer" },
  { name: "Rolsen", rus: "Rolsen", eng: "Rolsen", uzb: "Rolsen" },
  { name: "Samsung", rus: "Samsung", eng: "Samsung", uzb: "Samsung" },
  { name: "Sharp", rus: "Sharp", eng: "Sharp", uzb: "Sharp" },
  { name: "Sherwood", rus: "Sherwood", eng: "Sherwood", uzb: "Sherwood" },
  { name: "Sony", rus: "Sony", eng: "Sony", uzb: "Sony" },
  { name: "Soupt", rus: "Soupt", eng: "Soupt", uzb: "Soupt" },
  { name: "Subini", rus: "Subini", eng: "Subini", uzb: "Subini" },
  { name: "Supra", rus: "Supra", eng: "Supra", uzb: "Supra" },
  { name: "Sven", rus: "Sven", eng: "Sven", uzb: "Sven" },
  { name: "T+A", rus: "T+A", eng: "T+A", uzb: "T+A" },
  { name: "Toshiba", rus: "Toshiba", eng: "Toshiba", uzb: "Toshiba" },
  { name: "Vitek", rus: "Vitek", eng: "Vitek", uzb: "Vitek" },
  { name: "VR", rus: "VR", eng: "VR", uzb: "VR" },
  { name: "WOKSTER", rus: "WOKSTER", eng: "WOKSTER", uzb: "WOKSTER" },
  { name: "Xoro", rus: "Xoro", eng: "Xoro", uzb: "Xoro" },
  { name: "Yamaha", rus: "Yamaha", eng: "Yamaha", uzb: "Yamaha" },
  { name: "Витязь", rus: "Витязь", eng: "Витязь", uzb: "Витязь" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const MediaPlayer = () => {
  return (
    <div>
      <Options itemName={"brand"} title={"Марка плеера"} items={brand} />
    </div>
  );
};

export default MediaPlayer;
