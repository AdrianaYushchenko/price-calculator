import { createContext, ReactNode, useState } from "react";
import { CURRENCIES } from "../utils/constants";

export type SelectedCurrency = {
  name: string;
  image: string;
  ratesRatio: number;
};

type AppContextType = {
  selectedCurrency: SelectedCurrency;
  setSelectedCurrency: (currency: SelectedCurrency) => void;
};

export const AppContext = createContext({
  selectedCurrency: CURRENCIES[0],
} as AppContextType);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);

  return (
    <AppContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </AppContext.Provider>
  );
};
