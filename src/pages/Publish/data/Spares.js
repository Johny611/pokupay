import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";
import Condition from "../components/Condition";

const Spares = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div>
      <div className="flex flex-wrap max-w-[450px] gap-3 ">
        <div className="flex flex-wrap gap-4 my-3">
          <Condition />
        </div>
        <div>
          <p className="text-[14px] mb-[5px]">Для авто или мото</p>
          <div className="flex gap-2">
            <button
              name="auto"
              onClick={(e) => dispatch(setPublish({ spareFor: "auto" }))}
              className={`py-[5px] w-[150px] rounded-[5px] ${
                publishData.spareFor === "auto"
                  ? "bg-[#febe32]"
                  : "bg-[#f2f2f3]"
              }`}
            >
              Авто
            </button>
            <button
              name="moto"
              onClick={() => dispatch(setPublish({ spareFor: "moto" }))}
              className={`py-[5px] w-[150px] rounded-[5px]  ${
                publishData.spareFor === "moto"
                  ? "bg-[#febe32]"
                  : "bg-[#f2f2f3]"
              }`}
            >
              Мото
            </button>
          </div>
        </div>

        {publishData.spareFor === "auto" && (
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="autoSpareType">
              Вид автозапчасти
            </label>
            <select
              className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="autoSpareType"
              id="autoSpareType"
              value={publishData.autoSpareType}
              onChange={addPublishData}
            >
              <option value=""></option>
              <option value="autoSpares">Автозапчасти</option>
              <option value="accessoriesForAuto">Аксессуары для авто</option>
              <option value="autoAudio">Автозвук</option>
              <option value="gpsNavigationAutoregistrator">
                GPS-навигаторы / авторегистраторы
              </option>
              <option value="transportForSpare">Транспорт на запчастиы</option>
            </select>
          </div>
        )}

        {publishData.spareFor === "auto" &&
          publishData.autoSpareType === "autoSpares" && (
            <div className="selectdiv flex flex-col">
              <label className="text-[14px]" for="spareType">
                Вид запчасти
              </label>
              <select
                className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
                name="spareType"
                id="spareType"
                value={publishData.spareType}
                onChange={addPublishData}
              >
                <option value=""></option>
                <option value="autolight">Автосвет</option>
                <option value="batteries">Аккумуляторы</option>
                <option value="LPGEquipment">
                  Газобаллонное оборудование (ГБО)
                </option>
                <option value="engine">Двигатель</option>
                <option value="filters">Фильтры</option>
                <option value="bodyParts">Кузовные детали</option>
                <option value="suspension">Подвеска</option>
                <option value="steering">Рулевое управление</option>
                <option value="salon">Салон</option>
                <option value="glass">Стекла</option>
                <option value="fuelAndExhaustSystems">
                  Топливная и выхлопная системы
                </option>
                <option value="brakeSystem">Тормозная система</option>
                <option value="transmissionAndDrive">
                  Трансмиссия и привод
                </option>
                <option value="electricalEquipment">Электрооборудование</option>
              </select>
            </div>
          )}

        {publishData.spareFor === "auto" &&
          publishData.autoSpareType === "autoAudio" && (
            <div className="selectdiv flex flex-col">
              <label className="text-[14px]" for="autoAudioType">
                Вид товара
              </label>
              <select
                className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
                name="autoAudioType"
                id="autoAudioType"
                value={publishData.autoAudioType}
                onChange={addPublishData}
              >
                <option value=""></option>
                <option value="autolight">Магнитолы</option>
                <option value="batteries">Колонки и сабвуферы</option>
                <option value="LPGEquipment">Усилители</option>
                <option value="engine">Прочие компоненты</option>
              </select>
            </div>
          )}

        {publishData.spareFor === "auto" &&
          publishData.autoSpareType === "autoAudio" && (
            <div className="selectdiv flex flex-col">
              <label className="text-[14px]" for="autoAudioType">
                Марка
              </label>
              <select
                className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
                name="autoAudioType"
                id="autoAudioType"
                value={publishData.autoAudioType}
                onChange={addPublishData}
              >
                <option value=""></option>
                <option value="other">Другая марка</option>
                <option value="AD Audio">AD Audio</option>
                <option value="ADS">ADS</option>
                <option value="Akai">Akai</option>
                <option value="Alpine">Alpine</option>
                <option value="Art Sound">Art Sound</option>
                <option value="ASSISTANT">ASSISTANT</option>
                <option value="AudioART">AudioART</option>
                <option value="Audiobahn">Audiobahn</option>
                <option value="Audiosystem">Audiosystem</option>
                <option value="Audioson">Audioson</option>
                <option value="Auditor">Auditor</option>
                <option value="Autofun">Autofun</option>
                <option value="AVIATOR">AVIATOR</option>
                <option value="Bassworx">Bassworx</option>
                <option value="Bazooka">Bazooka</option>
                <option value="Blaupunkt">Blaupunkt</option>
                <option value="BMW">BMW</option>
                <option value="Boschmann">Boschmann</option>
                <option value="BOSS Audio">BOSS Audio</option>
                <option value="Boston Acoustics">Boston Acoustics</option>
                <option value="BRAX">BRAX</option>
                <option value="CADENCE">CADENCE</option>
                <option value="CALCELL">CALCELL</option>
                <option value="CDT Audio">CDT Audio</option>
                <option value="Celsior">Celsior</option>
                <option value="Challenger">Challenger</option>
                <option value="Clarion">Clarion</option>
                <option value="Coral">Coral</option>
                <option value="Coustic">Coustic</option>
                <option value="Crunch">Crunch</option>
                <option value="CYCLON">CYCLON</option>
                <option value="DAEWOO">DAEWOO</option>
                <option value="Digital">Digital</option>
                <option value="DLS">DLS</option>
                <option value="Dynaudio">Dynaudio</option>
                <option value="E.O.S">E.O.S</option>
                <option value="EarthQuake">EarthQuake</option>
                <option value="Edge">Edge</option>
                <option value="Eltax">Eltax</option>
                <option value="ESX Quantum">ESX Quantum</option>
                <option value="ETON">ETON</option>
                <option value="EX">EX</option>
                <option value="eXcursion">eXcursion</option>
                <option value="Fantom">Fantom</option>
                <option value="Farenheit">Farenheit</option>
                <option value="FLI">FLI</option>
                <option value="Focel">Focel</option>
                <option value="Forox">Forox</option>
                <option value="Fusion">Fusion</option>
                <option value="GENESIS">GENESIS</option>
                <option value="Gladen">Gladen</option>
                <option value="Glow">Glow</option>
                <option value="Ground Zero">Ground Zero</option>
                <option value="Harman/Kardon">Harman/Kardon</option>
                <option value="Helix">Helix</option>
                <option value="Hertz">Hertz</option>
                <option value="Hifonics">Hifonics</option>
                <option value="Hollywood">Hollywood</option>
                <option value="Hyundai">Hyundai</option>
                <option value="ICON">ICON</option>
                <option value="Infinity">Infinity</option>
                <option value="Insider">Insider</option>
                <option value="Intro">Intro</option>
                <option value="IPlay">IPlay</option>
                <option value="Ivolga">Ivolga</option>
                <option value="JBL">JBL</option>
                <option value="Jensen">Jensen</option>
                <option value="JL Audio">JL Audio</option>
                <option value="JVC">JVC</option>
                <option value="Kenwood">Kenwood</option>
                <option value="Kicker">Kicker</option>
                <option value="Kicx">Kicx</option>
                <option value="Lanzar">Lanzar</option>
                <option value="LG">LG</option>
                <option value="Lightning Audio">Lightning Audio</option>
                <option value="M-Dimension">M-Dimension</option>
                <option value="Macaudio">Macaudio</option>
                <option value="Macrom">Macrom</option>
                <option value="Magnat">Magnat</option>
                <option value="MB Quart">MB Quart</option>
                <option value="McIntosh">McIntosh</option>
                <option value="Mohawk">Mohawk</option>
                <option value="Morel">Morel</option>
                <option value="Mosconi">Mosconi</option>
                <option value="MTX">MTX</option>
                <option value="Mystery">Mystery</option>
                <option value="Nakamichi">Nakamichi</option>
                <option value="Orion">Orion</option>
                <option value="ORIS">ORIS</option>
                <option value="Oxygen Audio">Oxygen Audio</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Phantom">Phantom</option>
                <option value="Phase">Phase</option>
                <option value="Philips">Philips</option>
                <option value="Phoenix Gold">Phoenix Gold</option>
                <option value="Pioneer">Pioneer</option>
                <option value="Polk Audio">Polk Audio</option>
                <option value="Power Acoustik">Power Acoustik</option>
                <option value="Powerbass">Powerbass</option>
                <option value="Premiera">Premiera</option>
                <option value="Prology">Prology</option>
                <option value="Rainbow">Rainbow</option>
                <option value="Re Audio">Re Audio</option>
                <option value="Revolt">Revolt</option>
                <option value="Rockford Fosgate">Rockford Fosgate</option>
                <option value="RS">RS</option>
                <option value="SANSUI">SANSUI</option>
                <option value="Shuttle">Shuttle</option>
                <option value="Sigma">Sigma</option>
                <option value="Sinfoni">Sinfoni</option>
                <option value="Sony">Sony</option>
                <option value="Sound Bridge">Sound Bridge</option>
                <option value="Soundmax">Soundmax</option>
                <option value="Soundstream">Soundstream</option>
                <option value="SPL by Soundstream">SPL by Soundstream</option>
                <option value="Steelmate">Steelmate</option>
                <option value="Steg">Steg</option>
                <option value="Supra">Supra</option>
                <option value="Swat">Swat</option>
                <option value="Target">Target</option>
                <option value="TEAC">TEAC</option>
                <option value="Ultimate">Ultimate</option>
                <option value="UNITED">UNITED</option>
                <option value="USBlaster">USBlaster</option>
                <option value="VARTA">VARTA</option>
                <option value="Velas">Velas</option>
                <option value="Vibe">Vibe</option>
                <option value="Videovox">Videovox</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Vtrek">Vtrek</option>
                <option value="Wokster">Wokster</option>
                <option value="X-Digital">X-Digital</option>
                <option value="Zapco">Zapco</option>
                <option value="Урал">Урал</option>
              </select>
            </div>
          )}

        {publishData.spareFor === "auto" &&
          publishData.autoSpareType === "gpsNavigationAutoregistrator" && (
            <div className="selectdiv flex flex-col">
              <label className="text-[14px]" for="autoGPSNavigatorBrand">
                Марка
              </label>
              <select
                className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
                name="autoGPSNavigatorBrand"
                id="autoGPSNavigatorBrand"
                value={publishData.autoGPSNavigatorBrand}
                onChange={addPublishData}
              >
                <option value=""></option>
                <option value="Asus">Asus</option>
                <option value="Altina">Altina</option>
                <option value="Atomy">Atomy</option>
                <option value="AutoNavi">AutoNavi</option>
                <option value="Becker">Becker</option>
                <option value="Carmani">Carmani</option>
                <option value="Clarion">Clarion</option>
                <option value="EasyGo">EasyGo</option>
                <option value="Element">Element</option>
                <option value="Explay">Explay</option>
                <option value="Garmin">Garmin</option>
                <option value="Global Navigation">Global Navigation</option>
                <option value="Globalsat">Globalsat</option>
                <option value="GlobusGPS">GlobusGPS</option>
                <option value="Globway">Globway</option>
                <option value="Goclever">Goclever</option>
                <option value="Holux">Holux</option>
                <option value="iSUN">iSUN</option>
                <option value="JJ-Connect">JJ-Connect</option>
                <option value="Lexand">Lexand</option>
                <option value="Magellan">Magellan</option>
                <option value="Mio">Mio</option>
                <option value="Mystery">Mystery</option>
                <option value="Navigon">Navigon</option>
                <option value="Navistar">Navistar</option>
                <option value="Navitel">Navitel</option>
                <option value="NaviTop">NaviTop</option>
                <option value="NEC">NEC</option>
                <option value="Neoline">Neoline</option>
                <option value="Nexx">Nexx</option>
                <option value="OODO">OODO</option>
                <option value="Orion">Orion</option>
                <option value="Packard Bll">Packard Bll</option>
                <option value="Pioneer">Pioneer</option>
                <option value="Pocket Navigator">Pocket Navigator</option>
                <option value="Presteigio">Presteigio</option>
                <option value="Qstarz">Qstarz</option>
                <option value="Soupt">Soupt</option>
                <option value="Tenex">Tenex</option>
                <option value="TeXet">TeXet</option>
                <option value="TomTom">TomTom</option>
                <option value="Treelogic">Treelogic</option>
                <option value="Unistar">Unistar</option>
                <option value="xDevice">xDevice</option>
                <option value="other">Другая марка</option>
              </select>
            </div>
          )}

        {publishData.spareFor === "auto" &&
          publishData.autoSpareType === "transportForSpare" && (
            <div className="selectdiv flex flex-col">
              <label className="text-[14px]" for="transportForSpareBrand">
                Марка
              </label>
              <select
                className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
                name="transportForSpareBrand"
                id="transportForSpareBrand"
                value={publishData.transportForSpareBrand}
                onChange={addPublishData}
              >
                <option value=""></option>
                <option value="other">Другая марка</option>
                <option value="Богдан">Богдан</option>
                <option value="ВАЗ">ВАЗ</option>
                <option value="ГАЗ">ГАЗ</option>
                <option value="ЗАЗ">ЗАЗ</option>
                <option value="ЗИЛ">ЗИЛ</option>
                <option value="ИЖ">ИЖ</option>
                <option value="ЛуАЗ">ЛуАЗ</option>
                <option value="Москвич / АЗЛК">Москвич / АЗЛК</option>
                <option value="УАЗ">УАЗ</option>
                <option value="Acura">Acura</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="Audi">Audi</option>
                <option value="Bentley">Bentley</option>
                <option value="BMW">BMW</option>
                <option value="BYD">BYD</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Chery">Chery</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Citroen">Citroen</option>
                <option value="Dacia">Dacia</option>
                <option value="Daewoo">Daewoo</option>
                <option value="Daf">Daf</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Dodge">Dodge</option>
                <option value="Dongfeng">Dongfeng</option>
                <option value="FAW">FAW</option>
                <option value="Fiat">Fiat</option>
                <option value="Ford">Ford</option>
                <option value="Geely">Geely</option>
                <option value="Great Wall">Great Wall</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Infiniti">Infiniti</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Iveco">Iveco</option>
                <option value="JAC">JAC</option>
                <option value="Jaguar">Jaguar</option>
                <option value="JCB">JCB</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
                <option value="Lancia">Lancia</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Lexus">Lexus</option>
                <option value="Lifan">Lifan</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Mazda">Mazda</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Mercury">Mercury</option>
                <option value="MINI">MINI</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Opel">Opel</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Porsche">Porsche</option>
                <option value="Renault">Renault</option>
                <option value="Rover">Rover</option>
                <option value="Saab">Saab</option>
                <option value="Seat">Seat</option>
                <option value="Skoda">Skoda</option>
                <option value="Smart">Smart</option>
                <option value="SsangYong">SsangYong</option>
                <option value="Subaru">Subaru</option>
                <option value="Suzuki">Suzuki</option>
                <option value="TATA">TATA</option>
                <option value="Toyota">Toyota</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Volvo">Volvo</option>
              </select>
            </div>
          )}

        {publishData.spareFor === "moto" && (
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="motoSpareType">
              Вид мотозапчасти
            </label>
            <select
              className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
              name="motoSpareType"
              id="motoSpareType"
              value={publishData.motoSpareType}
              onChange={addPublishData}
            >
              <option value=""></option>
              <option value="motoSpares">Мотозапчасти</option>
              <option value="motoEquipment">Мотоэкипировка</option>
              <option value="motoAccessories">Мото аксессуары</option>
            </select>
          </div>
        )}

        {publishData.spareFor === "moto" &&
          publishData.motoSpareType === "motoEquipment" && (
            <div className="selectdiv flex flex-col">
              <label className="text-[14px]" for="motoEquipmentSpareType">
                Марка
              </label>
              <select
                className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
                name="motoEquipmentSpareType"
                id="motoEquipmentSpareType"
                value={publishData.motoEquipmentSpareType}
                onChange={addPublishData}
              >
                <option value=""></option>
                <option value="helmets">Мотошлемы</option>
                <option value="motoJackets">Мотокуртки</option>
                <option value="motoGloves">Мотоперчатки</option>
                <option value="motoBoots">Мотоботинки</option>
                <option value="motorcyclePants">Мотоштаны</option>
                <option value="motoProtection">Мотозащита</option>
                <option value="motoGlasses">Мотоочки</option>
                <option value="motosuitsAndOveralls">
                  Мотокостюмы и комбинезоны
                </option>
                <option value="motorcycleEquipmentGeneral">
                  Мотоэкипировка, общее
                </option>
                <option value="other">Другой</option>
              </select>
            </div>
          )}

        {publishData.spareFor === "moto" &&
          publishData.motoSpareType === "motoAccessories" && (
            <div className="selectdiv flex flex-col">
              <label className="text-[14px]" for="motoEquipmentSpareType">
                Марка
              </label>
              <select
                className="border border-gray-400 rounded-md py-[8px] px-[5px]  w-[280px] outline-none text-black"
                name="motoEquipmentSpareType"
                id="motoEquipmentSpareType"
                value={publishData.motoEquipmentSpareType}
                onChange={addPublishData}
              >
                <option value=""></option>
                <option value="Aprilia">Aprilia</option>
                <option value="Blata">Blata</option>
                <option value="BM">BM</option>
                <option value="BMW">BMW</option>
                <option value="Buell">Buell</option>
                <option value="Cagiva">Cagiva</option>
                <option value="CPI">CPI</option>
                <option value="CZ">CZ</option>
                <option value="Ducati">Ducati</option>
                <option value="Harley-Davidson">Harley-Davidson</option>
                <option value="Honda">Honda</option>
                <option value="Husqvarna">Husqvarna</option>
                <option value="Hyosung">Hyosung</option>
                <option value="Jawa">Jawa</option>
                <option value="Kawasaki">Kawasaki</option>
                <option value="KTM">KTM</option>
                <option value="Kymco">Kymco</option>
                <option value="Moto Guzzi">Moto Guzzi</option>
                <option value="MV Agusta">MV Agusta</option>
                <option value="Pannonia">Pannonia</option>
                <option value="Regal-Raptor">Regal-Raptor</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Triumph">Triumph</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Днепр">Днепр</option>
                <option value="ЗИД">ЗИД</option>
                <option value="Иж">Иж</option>
                <option value="Минск">Минск</option>
                <option value="Тула">Тула</option>
                <option value="Урал">Урал</option>
                <option value="other">Другая марка</option>
              </select>
            </div>
          )}
      </div>
    </div>
  );
};

export default Spares;
