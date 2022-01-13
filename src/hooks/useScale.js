import { useState } from 'react';

// react hook to handle scaling
// this hook allows for increment, decrement of scale

//prevents over-decrementing

export default function useScale(initScale = 2) {
  const [scale, setScale] = useState(initScale);

  const incrementScale = (adder = 0.1) => {
    console.log(adder);
    setScale((scale) => scale + adder);
  };

  const decrementScale = (adder = 0.1) => {
    if (scale <= 1.1) return;

    setScale((scale) => scale - adder);
  };

  return [scale, incrementScale, decrementScale];
}
