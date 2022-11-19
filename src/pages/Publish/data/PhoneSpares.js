import React from "react";
import Options from "../components/Options";

const spareTypes = [
  { name: "antennas", rus: "Антенны", eng: "Antennas", uzb: "Antennalar" },
  { name: "vibro", rus: "Вибро", eng: "Vibro", uzb: "Vibrator" },
  {
    name: "SIMCardHolders",
    rus: "Держатели SIM-карты",
    eng: "SIM card holders",
    uzb: "SIM karta tutgich",
  },
  { name: "joysticks", rus: "Джойстики", eng: "Joysticks", uzb: "Joystiklar" },
  { name: "speakers", rus: "Динамики", eng: "Speakers", uzb: "Spikerlar" },
  { name: "displays", rus: "Дисплеи", eng: "Displays", uzb: "Displeylar" },
  { name: "cameras", rus: "Камеры", eng: "Cameras", uzb: "Kameralar" },
  {
    name: "keyboards",
    rus: "Клавиатуры",
    eng: "Keyboards",
    uzb: "Klaviaturalar",
  },
  { name: "buttons", rus: "Кнопки", eng: "Buttons", uzb: "Tugmalar" },
  {
    name: "contactsAkb",
    rus: "Контакты Акб",
    eng: "Contacts Akb",
    uzb: "Kontaktlar Akb",
  },
  {
    name: "enclosuresPanels",
    rus: "Корпуса / панели",
    eng: "Enclosures / panels",
    uzb: "Korpuslar / panellar",
  },
  {
    name: "microcircuits",
    rus: "Микросхемы",
    eng: "Microcircuits",
    uzb: "Mikrosxemalar",
  },
  {
    name: "microphones",
    rus: "Микрофоны",
    eng: "Microphones",
    uzb: "Mikrofonlar",
  },
  {
    name: "substrates",
    rus: "Подложки",
    eng: "Substrates",
    uzb: "Substratlar",
  },
  { name: "connectors", rus: "разъёмы", eng: "Connectors", uzb: "Ulagichlar" },
  {
    name: "motherboards",
    rus: "Системные платы",
    eng: "Motherboards",
    uzb: "Sistema platalar",
  },
  {
    name: "touchscreens",
    rus: "Тачскрины",
    eng: "Touchscreens",
    uzb: "Sensorli ekranlar",
  },
  { name: "plumes", rus: "Шлейфы", eng: "Plumes", uzb: "Plashlar" },
  {
    name: "otherSparesForPhones",
    rus: "Прочие запчасти для телефонов",
    eng: "Other spare parts for phones",
    uzb: "Telefonlar uchun boshqa ehtiyot qismlar",
  },
  {
    name: "accumulators/batteries",
    rus: "Аккумуляторы/батареи",
    eng: "Accumulators/batteries",
    uzb: "Akkumulyatorlar/batareyalar",
  },
];

const PhoneSpares = () => {
  return (
    <div>
      <Options
        itemName={"spareType"}
        title={"Тип запчасти"}
        items={spareTypes}
      />
    </div>
  );
};

export default PhoneSpares;
