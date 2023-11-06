import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

let companies = ["AAPL", "MSFT", "TSLA", "AMZN", "META"];
let data = [];
//financialmodelingprep.com/api/v3/profile/TSLA?apikey=cgcDtDr7iMm3VyFImBSbmZqexWWeU9o1

export const AppProvider = ({ children }) => {
  const [currentStock, setCurrentStock] = useState("");
  const [stockData, setStockData] = useState([]);

  const fetchStocks = async (company) => {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/profile/${company}?apikey=b28865a97b311d10f46c689fc918ee56`
    );

    const data = await res.json();
    return data;
  };

  companies.forEach(async (company, i) => {
    let temp = await fetchStocks(company);
    data[i] = temp[0];
    setStockData(data);
  });
  console.log(setCurrentStock);

  return (
    <AppContext.Provider
      value={{
        currentStock,
        setCurrentStock,
        stockData,
        setStockData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
