import React, { useState } from "react";
import { Switch } from "@material-tailwind/react";

const Price = () => {
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className="border-t-2 border-[#febe32] bg-white p-4">
      <div className="tabs_container">
        <div className="tabs_headers bg-[#f2f2f3] max-w-[400px] flex space-around p-[5px] rounded-md">
          <button
            className={`transition-all flex-1 p-[5px] rounded-[5px] ${
              toggleState === 1 ? "bg-[#febe32]" : ""
            }`}
            onClick={() => setToggleState(1)}>
            Цена
          </button>
          {/* <button
            className={`transition-all flex-1 p-[5px] rounded-[5px] ${
              toggleState === 2 ? "bg-[#febe32]" : ""
            }`}
            onClick={() => setToggleState(2)}>
            Бесплатно
          </button> */}
          <button
            className={`transition-all flex-1 p-[5px] rounded-[5px] ${
              toggleState === 3 ? "bg-[#febe32]" : ""
            }`}
            onClick={() => setToggleState(3)}>
            Обмен
          </button>
        </div>
        <div className="tabs_body m-2">
          {toggleState === 1 && (
            <div>
              <div>
                <label className="text-sm" htmlFor="sum">
                  Цена
                </label>
                <div className="">
                  <input
                    className="bg-[#f2f2f3] p-[10px] outline-none"
                    type="text"
                    id="sum"
                  />
                  <select className="bg-[#f2f2f3] outline-none ml-[5px] p-[11px]">
                    <option>Сум</option>
                    <option>у.е</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 ml-[5px]">
                <Switch
                  className="text-black"
                  color="orange"
                  id="auto-update"
                  label="Договорная"
                />
              </div>
            </div>
          )}
          {toggleState === 2 && <div></div>}
          {toggleState === 3 && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Price;
