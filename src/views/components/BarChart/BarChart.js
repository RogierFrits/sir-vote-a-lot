import PropTypes from 'prop-types';
import React from 'react';
import {
  Bar,
  BarChart as ReBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const BarChart = ({
  width,
  height,
  data,
  margin,
  xAxisDataKey,
  barDataKey,
}) => (
  <div style={{ width, height }}>
    <ResponsiveContainer>
      <ReBarChart data={data} margin={margin}>
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={barDataKey} fill="#8884d8" />
      </ReBarChart>
    </ResponsiveContainer>
  </div>
);

BarChart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.object,
  data: PropTypes.array,
  xAxisDataKey: PropTypes.string,
  barDataKey: PropTypes.string,
};

BarChart.defaultProps = {
  height: 250,
  width: '100%',
  data: [],
  margin: {},
  xAxisDataKey: 'name',
  barDataKey: 'amount',
};

export default BarChart;
