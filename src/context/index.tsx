import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Launch } from "../types/Launch";
import energyCalculatorHelper from "../helpers/energyCalculatorHelper";
import { isNull } from "../helpers/helper";

type ContextValue = {
  selectedLaunches: Record<string, Launch | undefined>;
  setSelectedLaunches: (launches: Record<string, Launch | undefined>) => void;
  toggleLaunchSelection: (launch: Launch) => void;
  totalEnergyConsumption: string | null;
  hasSelectedLaunches?: boolean;
};

const Context = createContext<ContextValue>({
  selectedLaunches: {},
  setSelectedLaunches: () => {},
  toggleLaunchSelection: () => {},
  totalEnergyConsumption: null,
  hasSelectedLaunches: false,
});

export const useApp = () => useContext(Context);

export const ContextProvider = (props: any) => {
  const [selectedLaunches, setSelectedLaunches] = useState<
    Record<string, Launch | undefined>
  >({});

  const totalEnergyConsumption = useMemo(() => {
    if (Object.keys(selectedLaunches).length === 0) {
      return null;
    }
    return energyCalculatorHelper(selectedLaunches);
  }, [selectedLaunches]);

  const hasSelectedLaunches = useMemo(() => {
    return Object.keys(selectedLaunches).length > 0 || !isNull(totalEnergyConsumption);
  }, [selectedLaunches]);

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
      totalEnergyConsumption,
      hasSelectedLaunches,
    }),
    [
      selectedLaunches,
      setSelectedLaunches,
      toggleLaunchSelection,
      totalEnergyConsumption,
      hasSelectedLaunches,
    ]
  );

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
