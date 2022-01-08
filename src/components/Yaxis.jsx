import './Yaxis.css';
import { v4 as uuidv4 } from 'uuid';

function Yaxis({ min, max, name, precision, scaler }) {
  let length = max - min; // axis needs to adjust length based on scale
  let adjustedLength = length * scaler; // this allows for bubbles to have space (higher scale => more space)
  let extraLength = adjustedLength - length; // avoids awkardly tight graph
  let adjustedMin = min - extraLength / 2; // axis is adjusted with lower min and higher max

  return (
    <div className="Yaxis">
      <div className="Yaxis-label">{name}</div>
      {[...Array(precision)].map(
        (
          e,
          i // precision = ticks on axis
        ) => (
          <div className="Yaxis-tick" key={uuidv4()}>
            <div className="Yaxis-tick-number">
              {i !== 0 && // ensure no ticks on beginning and end of axis (looks awkward)
                i !== precision - 1 &&
                parseInt(adjustedMin + (adjustedLength / (precision - 1)) * i)}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Yaxis;
