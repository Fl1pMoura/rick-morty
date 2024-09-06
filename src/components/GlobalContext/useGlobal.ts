import { useContext } from "react";
import { GlobalContext } from ".";

export function useGlobal() {
  return useContext(GlobalContext);
}
