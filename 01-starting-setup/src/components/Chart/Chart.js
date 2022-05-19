import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((data) => {
        return (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={totalMaximum}
            label={data.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
