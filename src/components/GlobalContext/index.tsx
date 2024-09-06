import { createContext, useState } from "react";

interface GlobalContextValue {
  activeCharacterId: number;
  setActiveCharacterId: (id: number) => void;
}

export const GlobalContext = createContext({} as GlobalContextValue);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [activeCharacterId, setActiveCharacterId] = useState(1);

  return (
    <GlobalContext.Provider
      value={{
        activeCharacterId,
        setActiveCharacterId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
