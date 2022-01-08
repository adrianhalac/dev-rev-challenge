import './ScaleAdjuster.css';

// adjusters allow to adjust scale of axes
// simple button system with hooks

function ScaleAdjuster({ increment, decrement, title }) {
  return (
    <div className="ScaleAdjuster">
      <div className="ScaleAdjuster-title">{title}</div>
      <div className="ScaleAdjuster-buttons">
        <div className="ScaleAdjuster-button" onClick={decrement}>
          -
        </div>
        <div className="ScaleAdjuster-button" onClick={increment}>
          +
        </div>
      </div>
    </div>
  );
}

export default ScaleAdjuster;
