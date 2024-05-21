import React from "react";

const Btn = () => {
  return (
    <div className="w-[1200px] flex justify-between ml-5">
      <button className="w-[20%] h-[40px] bg-[#87CEEB] font-bold text-[16px] flex items-center justify-start p-3 rounded-[4px]">
        24 Hours
      </button>
      <button className="w-[20%] h-[40px] bg-[#14161a] text-white border-2 border-[#87CEEB] font-normal text-[16px] flex items-center justify-start p-3 rounded-[4px]">
        30 Days
      </button>
      <button className="w-[20%] h-[40px] bg-[#14161a] text-white border-2 border-[#87CEEB] font-normal text-[16px] flex items-center justify-start p-3 rounded-[4px]">
        3 Months
      </button>
      <button className="w-[20%] h-[40px] bg-[#14161a] text-white border-2 border-[#87CEEB] font-normal text-[16px] flex items-center justify-start p-3 rounded-[4px]">
        1 Year
      </button>
    </div>
  );
};

export default Btn;