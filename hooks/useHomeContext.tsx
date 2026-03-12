// React
import { useContext } from "react";

// Context
import { HomeContext } from "@/context/HomeContext";

const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error("useHomeContext must be used within an HomeProvider");
  }

  return context;
};

export default useHomeContext;
