import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
  } from "react";
import { calculateTotalEnergy} from "../../../helpers/energyCalculatorHelper";
import { isNull } from "../../../helpers/helper";
import { Launch } from "../../../types/Launch";
  
  type ContextValue = {
    selectedLaunches: Record<string, Launch | undefined>;
    setSelectedLaunches: (launches: Record<string, Launch | undefined>) => void;
    toggleLaunchSelection: (launch: Launch) => void;
    totalEnergyConsumption: string | null;
    hasSelectedLaunches?: boolean;
  };
  
  const LaunchesContext = createContext<ContextValue>({
    selectedLaunches: {},
    setSelectedLaunches: () => {},
    toggleLaunchSelection: () => {},
    totalEnergyConsumption: null,
    hasSelectedLaunches: false,
  });
  
  export const useLaunchManagement = () => useContext(LaunchesContext);
  
  export const LaunchesProvider = (props: any) => {
    const [selectedLaunches, setSelectedLaunches] = useState<
      Record<string, Launch | undefined>
    >({});
  
    const totalEnergyConsumption = useMemo(() => {
      if (Object.keys(selectedLaunches).length === 0) {
        return null;
      }
      return calculateTotalEnergy(selectedLaunches);
    }, [selectedLaunches]);
  
    const hasSelectedLaunches = useMemo(() => {
      return Object.keys(selectedLaunches).length > 0 || !isNull(totalEnergyConsumption);
    }, [selectedLaunches, totalEnergyConsumption]);
  
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
      <LaunchesContext.Provider value={contextValue}>{props.children}</LaunchesContext.Provider>
    );
  };
  
  export default LaunchesProvider;