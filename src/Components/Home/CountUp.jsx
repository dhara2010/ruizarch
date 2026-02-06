import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 8000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / (duration / 50);
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev + increment >= end) {
          clearInterval(interval);
          return end;
        }
        return prev + increment;
      });
    }, 5);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <>{Math.floor(count)}</>;
};

export default CountUp;
