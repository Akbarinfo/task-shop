import Routers from "./routers/routers";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";

export const HeartShop = createContext<any>([]);

function App() {
  const [heartShop, setHeartShop] = useState<any[]>([]);

  return (
    <HeartShop.Provider value={{ heartShop, setHeartShop }}>
      <Header />
      <Routers />
    </HeartShop.Provider>
  );
}

export default App;
