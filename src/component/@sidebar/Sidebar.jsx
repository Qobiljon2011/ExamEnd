import React, { useContext } from "react";
import { CryptoContext } from "../../@context/Context";

const Sidebar = ({ isOpen, selectedItems, onClose, onRemove }) => {
  const { select } = useContext(CryptoContext);

  const formatCurrency = (price) => {
    let formattedPrice = "";
    switch (select) {
      case "USD":
        formattedPrice = `$${price}`;
        break;
      case "RUB":
        formattedPrice = `${(price * 90).toFixed(0)}₽`;
        break;
      case "SUM":
        formattedPrice = `${(price * 12000).toFixed(0)} SUM`;
        break;
      default:
        formattedPrice = `$${price}`;
        break;
    }
    if (formattedPrice.length > 11) {
      formattedPrice = formattedPrice.substring(0, 8) + "...";
    }
    return formattedPrice;
  };
  

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-[#515151] text-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-[511px] z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl">WATCHLIST</h2>
        <button onClick={onClose} className="text-xl">
          X
        </button>
      </div>
      <div className="p-4 flex flex-wrap gap-[50px]">
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className="w-[198px] h-[248px] bg-black rounded-[25px] flex items-center flex-col justify-between p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              width={118}
              height={118}
              className="mt-5"
            />
            <h3 className="text-[20px] font-normal">
              {formatCurrency(item.current_price)}
            </h3>
            <button
              onClick={() => onRemove(index)}
              className="bg-[#FF0000] w-[106px] h-[30px] text-[20px] font-normal mb-5"
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
