import { AppContext } from "../providers/AppProvider";
import { useContextSelector } from "use-context-selector";

const useAppProvider = () => {
  const context = useContextSelector(AppContext, (state) => state);
  if (context === undefined) {
    throw new Error("useAppProvider must be used within an AppProvider");
  }
  return context;
};

export default useAppProvider;
