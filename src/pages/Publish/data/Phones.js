import React from "react";
import Checkboxes from "../components/Checkboxes";
import Options from "../components/Options";

const installments = [
  { name: "yes", rus: "Да", eng: "Yes", uzb: "Bor" },
  { name: "no", rus: "Нет", eng: "No", uzb: "Yo'q" },
];

const brands = [
  { name: "ACER" },
  { name: "ALCATEL" },
  { name: "ALLVIEW" },
  { name: "AMAZON" },
  { name: "AMOI" },
  { name: "APPLE" },
  { name: "ARCHOS" },
  { name: "ASUS" },
  { name: "AT&T" },
  { name: "BENEFON" },
  { name: "BENQ" },
  { name: "BENQ-SIEMENS" },
  { name: "BIRD" },
  { name: "BLACKBERRY" },
  { name: "BLACKVIEW" },
  { name: "BLU" },
  { name: "BOSCH" },
  { name: "BQ" },
  { name: "CASIO" },
  { name: "CAT" },
  { name: "CELKON" },
  { name: "CHEA" },
  { name: "COOLPAD" },
  { name: "DELL" },
  { name: "DOOGEE" },
  { name: "EMPORIA" },
  { name: "ENERGIZER" },
  { name: "ERICSSON" },
  { name: "ETEN" },
  { name: "FAIRPHONE" },
  { name: "FUJITSU SIEMENS" },
  { name: "GARMIN-ASUS" },
  { name: "GIGABYTE" },
  { name: "GIONEE" },
  { name: "GOOGLE" },
  { name: "HAIER" },
  { name: "HONOR" },
  { name: "HP" },
  { name: "HTC" },
  { name: "HUAWEI" },
  { name: "I-MATE" },
  { name: "I-MOBILE" },
  { name: "ICEMOBILE" },
  { name: "INFINIX" },
  { name: "INNOSTREAM" },
  { name: "INQ" },
  { name: "INTEX" },
  { name: "JOLLA" },
  { name: "KARBONN" },
  { name: "KYOCERA" },
  { name: "LAVA" },
  { name: "LEECO" },
  { name: "LENOVO" },
  { name: "LG" },
  { name: "MAXON" },
  { name: "MAXWEST" },
  { name: "MEIZU" },
  { name: "MICROMAX" },
  { name: "MICROSOFT" },
  { name: "MITAC" },
  { name: "MITSUBISHI" },
  { name: "MODU" },
  { name: "MOTOROLA" },
  { name: "MWG" },
  { name: "NEC" },
  { name: "NEONODE" },
  { name: "NIU" },
  { name: "NOKIA" },
  { name: "NOTHING" },
  { name: "NVIDIA" },
  { name: "ONEPLUS" },
  { name: "OPPO" },
  { name: "ORANGE" },
  { name: "PALM" },
  { name: "PANASONIC" },
  { name: "PANTECH" },
  { name: "PARLA" },
  { name: "PHILIPS" },
  { name: "PLUM" },
  { name: "POSH" },
  { name: "PRESTIGIO" },
  { name: "QMOBILE" },
  { name: "QTEK" },
  { name: "RAZER" },
  { name: "REALME" },
  { name: "SAGEM" },
  { name: "SAMSUNG" },
  { name: "SENDO" },
  { name: "SEWON" },
  { name: "SHARP" },
  { name: "SIEMENS" },
  { name: "SONIM" },
  { name: "SONY" },
  { name: "SPICE" },
  { name: "T-MOBILE" },
  { name: "TCL" },
  { name: "TECNO" },
  { name: "TEL.ME" },
  { name: "TELIT" },
  { name: "THURAYA" },
  { name: "TOSHIBA" },
  { name: "ULEFONE" },
  { name: "UNNECTO" },
  { name: "VERTU" },
  { name: "VERYKOOL" },
  { name: "VIVO" },
  { name: "VK MOBILE" },
  { name: "VODAFONE" },
  { name: "WIKO" },
  { name: "WND" },
  { name: "XCUTE" },
  { name: "XIAOMI" },
  { name: "XOLO" },
  { name: "YEZZ" },
  { name: "YOTA" },
  { name: "YU" },
  { name: "ZTE" },
];

const memory = [
  { name: "4GB", rus: "4ГБ", eng: "4GB" },
  { name: "8GB", rus: "8ГБ", eng: "8GB" },
  { name: "16GB", rus: "16ГБ", eng: "16GB" },
  { name: "32GB", rus: "32ГБ", eng: "32GB" },
  { name: "64GB", rus: "64ГБ", eng: "64GB" },
  { name: "128GB", rus: "128ГБ", eng: "128GB" },
  { name: "256GB", rus: "256ГБ", eng: "256GB" },
  { name: "512GB", rus: "512ГБ", eng: "512GB" },
  { name: "1024GB", rus: "1024ГБ", eng: "1024GB" },
  { name: "other", rus: "Другое", eng: "Other", uzb: "Boshqa" },
];

const simNumbers = [
  { name: "1sim", rus: "1 сим-карта", eng: "1 sim card", uzb: "1 sim-karta" },
  { name: "2sim", rus: "2 сим-карты", eng: "2 sim cards", uzb: "2 sim-karta" },
];

const operatingSystem = [
  { name: "Android", rus: "Android", eng: "Android", uzb: "Android" },
  { name: "IOS", rus: "IOS", eng: "IOS", uzb: "IOS" },
  {
    name: "Windows Phone",
    rus: "Windows Phone",
    eng: "Windows Phone",
    uzb: "Windows Phone",
  },
  { name: "other", rus: "Другая", eng: "Other", uzb: "Boshqa" },
];

const diagonal = [
  { name: "till4", rus: 'До 4"', eng: 'Till 4"', uzb: '4" gacha' },
  { name: "4.1-4.5", rus: '4.1"-4.5"', eng: '4.1"-4.5"', uzb: '4.1"-4.5"' },
  { name: "4.5-5", rus: '4.5"-5"', eng: '4.5"-5"', uzb: '4.5"-5"' },
  { name: "5.1-5.5", rus: '5.1"-5.5"', eng: '5.1"-5.5"', uzb: '5.1"-5.5"' },
  { name: "5.55-6", rus: '5.55"-6"', eng: '5.55"-6"', uzb: '5.55"-6"' },
  {
    name: "moreThan6",
    rus: 'Более 6"',
    eng: 'More than 6"',
    uzb: '6" dan yuqori',
  },
  { name: "other", rus: "Другое", eng: "Other", uzb: "Boshqa" },
];

const Phones = () => {
  return (
    <div>
      <Options
        itemName={"installments"}
        title={"В рассрочку"}
        items={installments}
      />
      <Options itemName={"brand"} title={"Марка телефона"} items={brands} />
      <Checkboxes title={"Объем встроенной памяти"} items={memory} />
      <Checkboxes title={"Кол-во сим карт"} items={simNumbers} />
      <Options
        itemName={"operatingSystem"}
        title={"Операционная система"}
        items={operatingSystem}
      />
      <Options
        itemName={"diagonal"}
        title={"Диагональ экрана"}
        items={diagonal}
      />
    </div>
  );
};

export default Phones;
