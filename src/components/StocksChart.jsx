import { useEffect } from "react";
import { useGlobalContext } from "./Context";
import Graph from "../utils/Graph";
const StocksChart = () => {
  const { stockData } = useGlobalContext();
  console.log(stockData);

  return (
    <div className="">
      <Graph data={stockData} />
    </div>
  );
};
export default StocksChart;
