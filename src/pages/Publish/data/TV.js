import React from "react";
import Options from "../components/Options";

const type = [
  {
    name: "liquidCrystal",
    rus: "Жидкокристаллические",
    eng: "Liquid crystal",
    uzb: "Suyuq kristall",
  },
  { name: "plasma", rus: "Плазменные", eng: "Plasma", uzb: "Plazma" },
  {
    name: "other",
    rus: "Прочие телевизоры",
    eng: "Other TVs",
    uzb: "Boshqa televizorlar",
  },
];

const brand = [
  { name: "Acer", rus: "Acer", eng: "Acer", uzb: "Acer" },
  { name: "Akai", rus: "Akai", eng: "Akai", uzb: "Akai" },
  { name: "Akira", rus: "Akira", eng: "Akira", uzb: "Akira" },
  {
    name: "Aquavision",
    rus: "Aquavision",
    eng: "Aquavision",
    uzb: "Aquavision",
  },
  { name: "BBK", rus: "BBK", eng: "BBK", uzb: "BBK" },
  { name: "BEKO", rus: "BEKO", eng: "BEKO", uzb: "BEKO" },
  { name: "BRAVIS", rus: "BRAVIS", eng: "BRAVIS", uzb: "BRAVIS" },
  {
    name: "Bang & Olufsen",
    rus: "Bang & Olufsen",
    eng: "Bang & Olufsen",
    uzb: "Bang & Olufsen",
  },
  { name: "BenQ", rus: "BenQ", eng: "BenQ", uzb: "BenQ" },
  { name: "Cameron", rus: "Cameron", eng: "Cameron", uzb: "Cameron" },
  { name: "Conrac", rus: "Conrac", eng: "Conrac", uzb: "Conrac" },
  { name: "Daewoo", rus: "Daewoo", eng: "Daewoo", uzb: "Daewoo" },
  { name: "Dex", rus: "Dex", eng: "Dex", uzb: "Dex" },
  { name: "Digital", rus: "Digital", eng: "Digital", uzb: "Digital" },
  { name: "Elenberg", rus: "Elenberg", eng: "Elenberg", uzb: "Elenberg" },
  { name: "Erisson", rus: "Erisson", eng: "Erisson", uzb: "Erisson" },
  { name: "Fujitsu", rus: "Fujitsu", eng: "Fujitsu", uzb: "Fujitsu" },
  { name: "General", rus: "General", eng: "General", uzb: "General" },
  { name: "Grundig", rus: "Grundig", eng: "Grundig", uzb: "Grundig" },
  { name: "Hanns.G", rus: "Hanns.G", eng: "Hanns.G", uzb: "Hanns.G" },
  { name: "Hantarex", rus: "Hantarex", eng: "Hantarex", uzb: "Hantarex" },
  { name: "Hitachi", rus: "Hitachi", eng: "Hitachi", uzb: "Hitachi" },
  { name: "Hyundai", rus: "Hyundai", eng: "Hyundai", uzb: "Hyundai" },
  { name: "Izumi", rus: "Izumi", eng: "Izumi", uzb: "Izumi" },
  { name: "JVC", rus: "JVC", eng: "JVC", uzb: "JVC" },
  { name: "LG", rus: "LG", eng: "LG", uzb: "LG" },
  { name: "Liberton", rus: "Liberton", eng: "Liberton", uzb: "Liberton" },
  { name: "Loewe", rus: "Loewe", eng: "Loewe", uzb: "Loewe" },
  { name: "Metz", rus: "Metz", eng: "Metz", uzb: "Metz" },
  {
    name: "Mitsubishi Electric",
    rus: "Mitsubishi Electric",
    eng: "Mitsubishi Electric",
    uzb: "Mitsubishi Electric",
  },
  { name: "Mystery", rus: "Mystery", eng: "Mystery", uzb: "Mystery" },
  { name: "NEC", rus: "NEC", eng: "NEC", uzb: "NEC" },
  { name: "Novex", rus: "Novex", eng: "Novex", uzb: "Novex" },
  { name: "Orion", rus: "Orion", eng: "Orion", uzb: "Orion" },
  { name: "Panasonic", rus: "Panasonic", eng: "Panasonic", uzb: "Panasonic" },
  { name: "Patriot", rus: "Patriot", eng: "Patriot", uzb: "Patriot" },
  { name: "Philips", rus: "Philips", eng: "Philips", uzb: "Philips" },
  { name: "Pioneer", rus: "Pioneer", eng: "Pioneer", uzb: "Pioneer" },
  { name: "Polar", rus: "Polar", eng: "Polar", uzb: "Polar" },
  { name: "Prestigio", rus: "Prestigio", eng: "Prestigio", uzb: "Prestigio" },
  { name: "Prima", rus: "Prima", eng: "Prima", uzb: "Prima" },
  { name: "Rainford", rus: "Rainford", eng: "Rainford", uzb: "Rainford" },
  { name: "Rolsen", rus: "Rolsen", eng: "Rolsen", uzb: "Rolsen" },
  { name: "Runco", rus: "Runco", eng: "Runco", uzb: "Runco" },
  { name: "SAGA", rus: "SAGA", eng: "SAGA", uzb: "SAGA" },
  { name: "Samsung", rus: "Samsung", eng: "Samsung", uzb: "Samsung" },
  { name: "Sansui", rus: "Sansui", eng: "Sansui", uzb: "Sansui" },
  { name: "Sanyo", rus: "Sanyo", eng: "Sanyo", uzb: "Sanyo" },
  { name: "Saturn", rus: "Saturn", eng: "Saturn", uzb: "Saturn" },
  { name: "Sharp", rus: "Sharp", eng: "Sharp", uzb: "Sharp" },
  { name: "Shivaki", rus: "Shivaki", eng: "Shivaki", uzb: "Shivaki" },
  { name: "Sony", rus: "Sony", eng: "Sony", uzb: "Sony" },
  { name: "Supra", rus: "Supra", eng: "Supra", uzb: "Supra" },
  { name: "TCL", rus: "TCL", eng: "TCL", uzb: "TCL" },
  { name: "Techno", rus: "Techno", eng: "Techno", uzb: "Techno" },
  { name: "Thomson", rus: "Thomson", eng: "Thomson", uzb: "Thomson" },
  { name: "Toshiba", rus: "Toshiba", eng: "Toshiba", uzb: "Toshiba" },
  { name: "Trony", rus: "Trony", eng: "Trony", uzb: "Trony" },
  { name: "VR", rus: "VR", eng: "VR", uzb: "VR" },
  { name: "Vestel", rus: "Vestel", eng: "Vestel", uzb: "Vestel" },
  { name: "WEST", rus: "WEST", eng: "WEST", uzb: "WEST" },
  { name: "Xoro", rus: "Xoro", eng: "Xoro", uzb: "Xoro" },
  { name: "Витязь", rus: "Витязь", eng: "Витязь", uzb: "Витязь" },
  { name: "Горизонт", rus: "Горизонт", eng: "Горизонт", uzb: "Горизонт" },
  { name: "Рубин", rus: "Рубин", eng: "Рубин", uzb: "Рубин" },
  { name: "Электрон", rus: "Электрон", eng: "Электрон", uzb: "Электрон" },
  { name: "Artel", rus: "Artel", eng: "Artel", uzb: "Artel" },
  { name: "other", rus: "Другая марка", eng: "Other", uzb: "Boshqa" },
];

const TV = () => {
  return (
    <div>
      <Options itemName={"type"} title={"Тип"} items={type} />
      <Options itemName={"brand"} title={"Марка телевизора"} items={brand} />
    </div>
  );
};

export default TV;
