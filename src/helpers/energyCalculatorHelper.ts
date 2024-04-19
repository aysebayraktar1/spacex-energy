import { KG_OF_FUEL_PER_KG_OF_MASS, ENERGY_PER_KG, JOULES_TO_KWH } from '../constants/energyConstants';
import { Launch } from '../types/Launch';

interface SelectedLaunches {
  [key: string]: Launch | undefined
}

export const calculateLaunchEnergy = (launch: Launch | undefined): number => {
  if (!launch || !launch.rocket || !launch.rocket.rocket.mass.kg) {
    return 0;
  }

  const massKg = launch.rocket.rocket.mass.kg;
  const fuelMass = massKg * KG_OF_FUEL_PER_KG_OF_MASS;
  const launchEnergy = (massKg + fuelMass) * ENERGY_PER_KG;
  return launchEnergy;
}

export const calculateTotalEnergy = (selectedLaunches: SelectedLaunches): string => {
  // The consumed energy depends only on the mass of the rocket that was used for the launch + the mass of the fuel
  // It costs about 15 kg of fuel bring 1 kg of mass to the Lower Earth Orbit
  // The fuel has an energetic value of 1.35*10^7 Joules / kg

  const totalEnergyInJoules = Object.values(selectedLaunches).reduce((totalEnergy, launch) => {
    const launchEnergy = calculateLaunchEnergy(launch);
    return totalEnergy + launchEnergy;
  }, 0);

  const totalEnergyInKWh = totalEnergyInJoules / JOULES_TO_KWH;
  return totalEnergyInKWh.toFixed(2);
};

