import React, { useMemo } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { Launch } from "../../../types/Launch";
import { getLaunchDataForCharts } from "../../../helpers/chartHelper";
import { COLORS } from "../../../constants/colors";

type Props = {
  launches: Launch[];
};

const RocketDistributionPieChart: React.FC<Props> = ({ launches }) => {
  const { rocketDistribution } = getLaunchDataForCharts(launches);

  const data = useMemo(() => {
    return Object.keys(rocketDistribution).map((name) => ({
      name,
      value: rocketDistribution[name],
    }));
  }, [rocketDistribution, launches]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};
export default RocketDistributionPieChart;
