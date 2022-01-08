import './GraphAxes.css';
import Xaxis from './Xaxis';
import Yaxis from './Yaxis';

function GraphAxes({
  dataEdges,
  xName,
  yName,
  yPrecision,
  xPrecision,
  yScale,
  xScale,
}) {
  let xmin = dataEdges.minimums[xName]; // grab minimum and maximum values from dataset
  let xmax = dataEdges.maximums[xName]; // axes are calibrated to dataset based on min-max

  let ymin = dataEdges.minimums[yName];
  let ymax = dataEdges.maximums[yName];

  return (
    <div className="GraphAxes">
      <Xaxis // X-axis
        min={xmin}
        max={xmax}
        name={xName}
        precision={xPrecision}
        scaler={xScale}
      />
      <Yaxis // Y-axis
        min={ymin}
        max={ymax}
        name={yName}
        precision={yPrecision}
        scaler={yScale}
      />
    </div>
  );
}

export default GraphAxes;
