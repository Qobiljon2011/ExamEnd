import React, { createContext, useState, useEffect } from "react";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [select, setSelect] = useState(null);
  const [cryptoData, setCryptoData] = useState([]);
  const [bitcoin, setBitcoin] = useState(null);
  const [ethereum, setEthereum] = useState(null);
  const [ripple, setRipple] = useState(null);
  const [solana, setSolana] = useState(null);
  const [binancecoin, setBinancecoin] = useState(null);
  const [dogecoin, setDogecoin] = useState(null);
  const [cardano, setCardano] = useState(null);
  const [chainlink, setChainlink] = useState(null);
  const [polkadot, setPolkadot] = useState(null);
  const [stellar, setStellar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";
        const response = await fetch(url);
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCryptoData = async (id, setter) => {
      try {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setter(data);
      } catch (error) {
        console.error(`Error fetching ${id} data: `, error);
      }
    };

    if (!bitcoin) fetchCryptoData("bitcoin", setBitcoin);
    if (!ethereum) fetchCryptoData("ethereum", setEthereum);
    if (!ripple) fetchCryptoData("ripple", setRipple);
    if (!solana) fetchCryptoData("solana", setSolana);
    if (!binancecoin) fetchCryptoData("binancecoin", setBinancecoin);
    if (!dogecoin) fetchCryptoData("dogecoin", setDogecoin);
    if (!cardano) fetchCryptoData("cardano", setCardano);
    if (!chainlink) fetchCryptoData("chainlink", setChainlink);
    if (!polkadot) fetchCryptoData("polkadot", setPolkadot);
    if (!stellar) fetchCryptoData("stellar", setStellar);
  }, [
    bitcoin,
    ethereum,
    ripple,
    solana,
    binancecoin,
    dogecoin,
    cardano,
    chainlink,
    polkadot,
    stellar,
  ]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        bitcoin,
        ethereum,
        ripple,
        solana,
        binancecoin,
        dogecoin,
        cardano,
        chainlink,
        polkadot,
        stellar,
        select,
        setSelect,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
