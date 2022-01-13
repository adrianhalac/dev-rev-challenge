import './ScaleAdjuster.css';

// adjusters allow to adjust scale of axes
// simple button system with hooks

function ScaleAdjuster({ increment, decrement, title }) {
  return (
    <div className="ScaleAdjuster">
      <div className="ScaleAdjuster-title">{title}</div>
      <div className="ScaleAdjuster-buttons">
        <div className="ScaleAdjuster-button" onClick={() => decrement(0.06)}>
          -
        </div>
        <div className="ScaleAdjuster-button" onClick={() => increment(0.06)}>
          +
        </div>
      </div>
    </div>
  );
}

export default ScaleAdjuster;
