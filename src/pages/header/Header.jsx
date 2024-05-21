import React, { useContext, useState } from "react";
import { CryptoContext } from "../../@context/Context";

const Header = () => {
  const { select, setSelect } = useContext(CryptoContext);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  console.log(select);

  return (
    <div className="w-[100%] h-[64px] flex items-center justify-center bg-[#14161a] border-b border-black">
      <div className="w-[70%] h-[75%] flex items-center justify-between">
        <p className="text-[20px] font-Montserrat text-[#87CEEB] font-bold">
          CRYPTOFOLIO
        </p>
        <div className="w-[17%] h-[100%] flex items-center justify-between">
          <select
            name=""
            id=""
            className="bg-[#14161a] text-white"
            value={select || "USD"}
            onChange={handleChange}
          >
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EURO">EURO</option>
          </select>
          <button className="w-[133px] h-[40px] bg-[#87CEEB] text-[#000000DE] font-medium text-[14px] rounded-[4px]">
            WATCH LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;