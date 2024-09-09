import { createContext, useState } from "react";

interface GlobalContextValue {
  activeCharacterId: number;
  activeEpisodeId: number;
  activeLocationId: number;
  setActiveCharacterId: (id: number) => void;
  setActiveEpisodeId: (id: number) => void;
  setActiveLocationId: (id: number) => void;
}

export const GlobalContext = createContext({} as GlobalContextValue);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [activeCharacterId, setActiveCharacterId] = useState(1);
  const [activeEpisodeId, setActiveEpisodeId] = useState(1);
  const [activeLocationId, setActiveLocationId] = useState(1);

  return (
    <GlobalContext.Provider
      value={{
        activeCharacterId,
        setActiveCharacterId,
        activeEpisodeId,
        setActiveEpisodeId,
        activeLocationId,
        setActiveLocationId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
