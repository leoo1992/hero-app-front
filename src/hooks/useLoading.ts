import { useContext } from "react";
import LoadingContext from "@/contexts/loadingContext";

export function useLoading() {
  return useContext(LoadingContext);
}
