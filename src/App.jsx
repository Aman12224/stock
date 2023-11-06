import { useEffect, useState } from "react";

import StocksChart from "./components/StocksChart";

function App() {
  const [s, setS] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setS(1);
    }, 1000);
  }, []);
  return (
    <div className="bg-[#111113] h-screen text-white font-mono">
      <div className="grid py-20 lg:gap-x-80 md:gap-x-40 place-content-center">
        {s === 1 && <StocksChart />}
      </div>
    </div>
  );
}

export default App;
