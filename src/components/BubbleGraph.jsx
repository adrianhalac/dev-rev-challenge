import './BubbleGraph.css';
import Bubble from './Bubble';
import GraphAxes from './GraphAxes';
import ScaleAdjuster from './ScaleAdjuster';
import { v4 as uuidv4 } from 'uuid';
import findDataEdges from '../utils/findDataEdges';
import { useState, useEffect } from 'react';
import useScale from '../hooks/useScale';

function BubbleGraph({
  data,
  xName,
  yName,
  zName,
  xPrecision,
  yPrecision,
  initXScale,
  initYScale,
  scaleButtons,
}) {
  const [seeThrough, setSeeThrough] = useState(false); // seeThrough bubbles state control

  // scale = how much bigger is the axis range than the data range
  // 2 = axis is twice as long as it needs to be

  // initialize custom hooks that allow for proper control of scale
  // also prevents over-decrementing (below 1.1 scale)
  const [xScale, incrementXScale, decrementXScale] = useScale(initXScale);
  const [yScale, incrementYScale, decrementYScale] = useScale(initYScale);

  function handleScroll(e) {
    if (e.deltaY > 0) {
      incrementXScale(0.01);
      incrementYScale(0.01);
    } else {
      decrementXScale(0.01);
      decrementYScale(0.01);
    }
  }

  const toggleSeeThrough = () => {
    // function to invert seeThrough state
    setSeeThrough((mode) => !mode);
  };

  let dataEdges = findDataEdges({ data }); // get maximums and minimums from data to calibrate graph

  let bubbleOpacity = seeThrough ? 0.8 : 1; // two opacity states to toggle through

  return (
    <div className="BubbleGraph" onWheel={handleScroll}>
      <div
        className={
          seeThrough ? 'bubbleOpacityButtonToggled' : 'bubbleOpacityButton'
        }
        onClick={toggleSeeThrough}
      >
        Toggle opaque bubbles
      </div>
      {scaleButtons && (
        <div className="ScaleAdjusters">
          <ScaleAdjuster
            increment={incrementXScale}
            decrement={decrementXScale}
            title="X-Scale"
          />
          <ScaleAdjuster
            increment={incrementYScale}
            decrement={decrementYScale}
            title="Y-Scale"
          />
        </div>
      )}
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
