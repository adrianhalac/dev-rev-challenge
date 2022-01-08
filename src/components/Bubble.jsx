import './Bubble.css';

function getLeftOffset({ dataEdges, xScale, xData, xName }) {
  let xmin = dataEdges.minimums[xName];
  let xmax = dataEdges.maximums[xName];

  let xLength = xmax - xmin;
  let adjustedXLength = xLength * xScale;
  let extraLength = adjustedXLength - xLength;
  let adjustedXMin = xmin - extraLength / 2;

  let adjustedPercentXOffset = ((xData - adjustedXMin) / adjustedXLength) * 100;

  // offset is placement within div, which in turn is placement on graph
  // x-offset is determined by how far along x-axis bubble value should be
  // this function calculates x-value as % of axis range

  return adjustedPercentXOffset;
}

function getTopOffset({ dataEdges, yScale, yData, yName }) {
  let ymin = dataEdges.minimums[yName];
  let ymax = dataEdges.maximums[yName];

  let yLength = ymax - ymin;
  let adjustedYLength = yLength * yScale;
  let extraLength = adjustedYLength - yLength;
  let adjustedYMin = ymin - extraLength / 2;

  let adjustedPercentYOffset = ((yData - adjustedYMin) / adjustedYLength) * 100;

  // offset is placement within div, which in turn is placement on graph
  // y-offset is determined by how far along y-axis bubble value should be
  // this function calculates y-value as % of axis range
  // returns 'remainder' of percentage, since this is top value and needs to be adjusted as such

  return 100 - adjustedPercentYOffset;
}

function Bubble({
  title,
  dataEdges,
  xData,
  xName,
  yData,
  yName,
  zData,
  zName,
  yScale,
  xScale,
  bubbleOpacity,
}) {
  let leftOffset = getLeftOffset({ dataEdges, xScale, xData, xName });
  let topOffset = getTopOffset({ dataEdges, yScale, yData, yName });

  // offsets for bubble determine placement on graph
  // offset is determined by value as percentage of adjusted axis

  const bubbleSizeStyle = {
    opacity: bubbleOpacity,
    transform: 'translateX(-50%) translateY(-50%)',
    width: zData,
    height: zData,
    position: 'absolute',
    left: `${leftOffset}%`,
    zIndex: -zData,
    top: `${topOffset}%`,
    backgroundColor: `hsl(
      ${Math.floor(Math.random() * 361)}, 
      ${Math.floor(Math.random() * 101)}%,
      ${Math.floor(Math.random() * (80 - 45) + 45)}%
       )`,
  };

  // opacity is determined by state (by button)
  // transform allows for bubbles to be 'centered' onto their left and top offsets
  // width and height determined by z-data, bigger circle = higher z-data number
  // background color is set to be brighter colors only. Else black title text doesn't 'pop' enough

  return (
    <div style={bubbleSizeStyle} className="Bubble">
      <div className="Bubble-info">
        <div className="infoTitle">{`${title}`}</div>
        <div className="infoLine">{`${xName}: ${xData}`}</div>
        <div className="infoLine">{`${yName}: ${yData}`}</div>
        <div className="infoLine">{`${zName}: ${zData}`}</div>
      </div>
      <div className="BubbleTitle">{title}</div>
    </div>
  );
}

export default Bubble;
