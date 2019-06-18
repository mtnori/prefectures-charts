import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Label,
  Tooltip
} from 'recharts';
import colors from './colors';

const PrefCharts = ({ series }) => (
  <LineChart
    width={600}
    height={400}
    margin={{
      top: 20,
      right: 20,
      left: 80,
      bottom: 40
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" type="category" allowDuplicatedCategory={false}>
      <Label value="年度" offset={-10} position="insideBottom" />
    </XAxis>
    <YAxis dataKey="value" tickFormatter={number => number.toLocaleString()}>
      <Label value="人口数" offset={-50} angle={-90} position="insideLeft" />
    </YAxis>
    <Tooltip formatter={number => number.toLocaleString()} />
    <Legend
      align="right"
      verticalAlign="middle"
      layout="vertical"
      wrapperStyle={{ paddingLeft: 10 }}
    />
    {series.map((s, index) => (
      <Line
        type="monotone"
        dataKey="value"
        data={s.data}
        name={s.name}
        key={s.name}
        stroke={colors[index]}
      />
    ))}
  </LineChart>
);

export default PrefCharts;
