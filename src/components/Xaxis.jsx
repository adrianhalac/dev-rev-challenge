import './Xaxis.css';
import { v4 as uuidv4 } from 'uuid';

function Xaxis({ min, max, name, precision, scaler }) {
  let length = max - min; // axis needs to adjust length based on scale
  let adjustedLength = length * scaler; // this allows for bubbles to have space
  let extraLength = adjustedLength - length; // avoids awkardly tight graph
  let adjustedMin = min - extraLength / 2; // axis is adjusted with lower min and higher max

  return (
    <div className="Xaxis">
      <div className="Xaxis-label">{name}</div>
      {[...Array(precision)].map(
        (
          e,
          i // precision = ticks on axis
        ) => (
          <div className="Xaxis-tick" key={uuidv4()}>
            <div className="Xaxis-tick-number">
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

export default Xaxis;
