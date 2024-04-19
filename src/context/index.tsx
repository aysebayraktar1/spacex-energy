import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Launch } from "../types/Launch";

type ContextValue = {
  selectedLaunches: Record<string, Launch | undefined>;
  setSelectedLaunches: (launches: Record<string, Launch | undefined>) => void;
  toggleLaunchSelection: (launch: Launch) => void;
};

const Context = createContext<ContextValue>({
  selectedLaunches: {},
  setSelectedLaunches: () => {},
  toggleLaunchSelection: () => {},
});

export const useApp = () => useContext(Context);

export const ContextProvider = (props: any) => {
  const [selectedLaunches, setSelectedLaunches] = useState<
    Record<string, Launch | undefined>
  >({});

  const toggleLaunchSelection = useCallback((launch: Launch) => {
    setSelectedLaunches((currentSelections) => {
      const updatedSelections = { ...currentSelections };
      if (updatedSelections[launch.id]) {
        delete updatedSelections[launch.id];
      } else {
        updatedSelections[launch.id] = launch;
      }
      return updatedSelections;
    });
  }, []);

  const contextValue = useMemo<ContextValue>(
    () => ({
      selectedLaunches,
      setSelectedLaunches,
      toggleLaunchSelection,
    }),
    [selectedLaunches, setSelectedLaunches, toggleLaunchSelection]
  );

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
