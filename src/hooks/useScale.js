import { useState } from 'react';

// react hook to handle scaling
// this hook allows for increment, decrement of scale

//prevents over-decrementing

export default function useScale(initScale = 2) {
  const [scale, setScale] = useState(initScale);

  const incrementScale = () => {
    setScale((scale) => scale + 0.1);
  };

  const decrementScale = () => {
    if (scale <= 1.1) return;

    setScale((scale) => scale - 0.1);
  };

  return [scale, incrementScale, decrementScale];
}
