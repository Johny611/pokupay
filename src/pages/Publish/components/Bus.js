import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPublish } from "../../../features/publishSlice";

const Bus = () => {
  const dispatch = useDispatch();
  const publishData = useSelector((state) => state.publishData.data);

  const addPublishData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setPublish({ [name]: value }));
  };

  return (
    <div className="">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-wrap gap-4 my-3">
          <div className="selectdiv flex flex-col">
            <label className="text-[14px]" for="brand">
              Марка
            </label>
            <select
              className="border border-gray-500 rounded-md py-[8px] px-[5px] w-[280px] outline-none text-black"
              name="brand"
              id="brand"
              value={publishData.brand}
              onChange={addPublishData}
            >
              <option value=""></option>
              <option value="Bova">Bova</option>
              <option value="Daewoo">Daewoo</option>
              <option value="Ford">Ford</option>
              <option value="Golden Dragon">Golden Dragon</option>
              <option value="Higer">Higer</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Ikarus">Ikarus</option>
              <option value="IVECO">IVECO</option>
              <option value="Kia">Kia</option>
              <option value="King Long">King Long</option>
              <option value="MAN">MAN</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Neoplan">Neoplan</option>
              <option value="Nissan">Nissan</option>
              <option value="Scania">Scania</option>
              <option value="Setra">Setra</option>
              <option value="Shen Long">Shen Long</option>
              <option value="SsangYong">SsangYong</option>
              <option value="TAM">TAM</option>
              <option value="Volvo">Volvo</option>
              <option value="Yutong">Yutong</option>
              <option value="Богдан">Богдан</option>
              <option value="Волжанин">Волжанин</option>
              <option value="ГАЗ">ГАЗ</option>
              <option value="ЗИЛ">ЗИЛ</option>
              <option value="КАвЗ">КАвЗ</option>
              <option value="КамАЗ">КамАЗ</option>
              <option value="ЛАЗ">ЛАЗ</option>
              <option value="ЛиАЗ">ЛиАЗ</option>
              <option value="МАЗ">МАЗ</option>
              <option value="МАРЗ">МАРЗ</option>
              <option value="НефАЗ">НефАЗ</option>
              <option value="ПАЗ">ПАЗ</option>
              <option value="РАФ">РАФ</option>
              <option value="other">Другая марка</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bus;
