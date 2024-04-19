import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Launch } from "../../../types/Launch";
import { getLaunchDataForCharts } from "../../../helpers/chartHelper";

type Props = {
  launches: Launch[];
};

const LaunchesPerYearBarChart: React.FC<Props> = ({ launches }) => {
  const { launchesPerYear } = getLaunchDataForCharts(launches);
  
  const data = useMemo(() => {
    return Object.keys(launchesPerYear).map((year) => ({
      year,
      launches: launchesPerYear[year],
    }));
  }, [launchesPerYear]);


  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="launches" fill="#8884d8" />
    </BarChart>
  );
};

export default LaunchesPerYearBarChart;
