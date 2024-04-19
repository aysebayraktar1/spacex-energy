import { Launch } from "../types/Launch";

export const getLaunchDataForCharts = (launches: Launch[]) => {
    const launchesPerYear: Record<string, number> = {};
    const rocketDistribution: Record<string, number> = {};

    launches.forEach((launch) => {
        launchesPerYear[launch.launch_year] =
            (launchesPerYear[launch.launch_year] || 0) + 1;

        const rocketName = launch.rocket.rocket_name;
        rocketDistribution[rocketName] = (rocketDistribution[rocketName] || 0) + 1;
    });

    return { launchesPerYear, rocketDistribution };
};