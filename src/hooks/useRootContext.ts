import { rootContext } from "../context/rootContext";
import { useContext } from "react";

export const useRootContext = () => {
  const { value, dispatch } = useContext(rootContext);
  return { value, dispatch };
};
