import './BubbleGraph.css';
import Bubble from './Bubble';
import GraphAxes from './GraphAxes';
import { v4 as uuidv4 } from 'uuid';
import findDataEdges from '../utils/findDataEdges';
import { useState } from 'react';

function BubbleGraph({ data, xName, yName, zName }) {
  const [seeThrough, setSeeThrough] = useState(false); // seeThrough bubbles state control

  const toggleSeeThrough = () => {
    // function to invert seeThrough state
    setSeeThrough((mode) => !mode);
  };

  let dataEdges = findDataEdges({ data }); // get maximums and minimums from data to calibrate graph

  let xPrecision = 20; // precison = how many ticks per axis
  let yPrecision = 10;

  let xScale = 2; // scale = how much bigger is the axis range than the data range
  let yScale = 2; // 2 = axis is twice as long as it needs to be

  let bubbleOpacity = seeThrough ? 0.8 : 1; // two opacity states to toggle through

  return (
    <div className="BubbleGraph">
      <div
        className={
          seeThrough ? 'bubbleOpacityButtonToggled' : 'bubbleOpacityButton'
        }
        onClick={toggleSeeThrough}
      >
        See-through bubbles
      </div>
      <GraphAxes // axes layer underneath bubbles layet
        dataEdges={dataEdges}
        xName={xName}
        yName={yName}
        xPrecision={xPrecision}
        yPrecision={yPrecision}
        yScale={yScale}
        xScale={xScale}
      />
      <div className="BubbleGraph-bubbles">
        {data.map((dataPoint) => (
          <Bubble // bubbles layer
            dataEdges={dataEdges}
            yScale={yScale}
            xScale={xScale}
            title={dataPoint.title}
            xData={dataPoint[xName]}
            xName={xName}
            yName={yName}
            zName={zName}
            yData={dataPoint[yName]}
            zData={dataPoint[zName]}
            key={uuidv4()}
            bubbleOpacity={bubbleOpacity}
          />
        ))}
      </div>
    </div>
  );
}

export default BubbleGraph;
