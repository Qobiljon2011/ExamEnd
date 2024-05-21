import React, { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../../@context/Context";
import Eye1 from "../../image/Eye (1).png";
import Eye from "../../image/Eye.png";
import Sidebar from "../../component/@sidebar/Sidebar";
import { Link } from "react-router-dom";

const MainSection = () => {
  const [eyeClicked, setEyeClicked] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { cryptoData, select } = useContext(CryptoContext);
  const [currencyMultiplier, setCurrencyMultiplier] = useState(1);
  const recordsPerPage = 3;


  useEffect(() => {
    if (select === "USD") {
      setCurrencyMultiplier(1);
    } else if (select === "RUB") {
      setCurrencyMultiplier(90);
    } else if (select === "EURO") {
      setCurrencyMultiplier(1);
    }
  }, [select]);

  const formatPrice = (price) => {
    const formattedPrice = (price * currencyMultiplier).toFixed(2);
    if (select === "EURO") {
      return `${formattedPrice} €`;
    } else if (select === "RUB"){
      return `${formattedPrice} ₽`;
    } else if(select === "USD"){
      return `${formattedPrice} $`;
    }
    return formattedPrice;
  };

  const removeFromWatchlist = (indexToRemove) => {
    setSelectedItems((prevItems) => {
      return prevItems.filter((_, index) => index !== indexToRemove);
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleEyeClick = (e, id) => {
    e.stopPropagation();
    const updatedEyeClicked = { ...eyeClicked, [id]: !eyeClicked[id] };
    setEyeClicked(updatedEyeClicked);

    const item = cryptoData.find((item) => item.id === id);
    const updatedSelectedItems = updatedEyeClicked[id]
      ? [...selectedItems, item]
      : selectedItems.filter((selectedItem) => selectedItem.id !== item.id);

    setSelectedItems(updatedSelectedItems);
    setSidebarOpen(updatedSelectedItems.length > 0);

    const storedData = {
      eyeClicked: updatedEyeClicked[id],
      current_price: item.current_price,
      image: item.image,
    };

    localStorage.setItem(`cryptoData_${id}`, JSON.stringify(storedData));
  };

  const filteredCryptoData = cryptoData.filter((item) => {
    return (
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentData = filteredCryptoData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredCryptoData.length / recordsPerPage);

  return (
    <div className="relative w-full h-[540px] bg-[#14161a] flex items-end justify-center py-8">
      <div className="w-[70%] h-[95%] flex flex-col justify-between">
        <div className="w-full mb-8">
          <div className="w-full flex items-center justify-center mb-4">
            <p className="text-white text-2xl lg:text-3xl font-semibold">
              Cryptocurrency Prices by Market Cap
            </p>
          </div>
          <div className="w-full">
            <form className="w-full">
              <input
                type="text"
                placeholder="Search For a Cryptocurrency..."
                className="w-full h-12 bg-[#1a1c20] pl-5 rounded text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="rounded-[4px]">
              <tr className="bg-[#87CEEB] rounded-[4px]">
                <th className=" p-3 text-black">Coin</th>
                <th className=" p-3 text-black text-right">Price</th>
                <th className=" p-3 text-black text-center">24h Change</th>
                <th className=" p-3 text-black text-right">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr
                  className="bg-[#14161a] border-b border-gray-600 hover:bg-[#1a1c20] cursor-pointer relative"
                  key={item.id}
                >
                  <td className="p-3 flex items-center">
                    <Link
                      to={`/single/${item.id}`}
                      className="flex items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                      <div className="ml-4">
                        <p className="text-white text-sm md:text-base font-medium">
                          {item.symbol.toUpperCase()}
                        </p>
                        <p className="text-white text-xs md:text-sm">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td className="p-3 text-right text-white">
                    <Link to={`/single/${item.id}`}>
                      <p>{formatPrice(item.current_price)}</p>
                    </Link>
                  </td>
                  <td className="p-3 flex absolute top-2 left-[55%]">
                    <button
                      className="flex items-center justify-center"
                      onClick={(e) => handleEyeClick(e, item.id)}
                    >
                      <img
                        src={
                          eyeClicked[item.id] &&
                          selectedItems.some(
                            (selectedItem) => selectedItem.id === item.id
                          )
                            ? Eye
                            : Eye1
                        }
                        alt="Eye Icon"
                        width={24}
                        height={24}
                      />
                    </button>
                    <p
                      className={`text-black ml-5 ${
                        item.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </td>
                  <td className="p-3 text-right text-white">
                    {item.market_cap}M
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 mx-1 ${
                page === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              } rounded transition duration-300`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <Sidebar
        isOpen={sidebarOpen}
        selectedItems={selectedItems}
        onClose={() => setSidebarOpen(false)}
        onRemove={removeFromWatchlist}
      />
    </div>
  );
};

export default MainSection;
