import React, { useState } from 'react';

import { useEffectOnce, useToggle, useUpdate } from './hooks';

const App = () => {
  const [value, toggleValue] = useToggle(false);
  const [count, setCount] = useState(10);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  function factorialPromise(n: number) {
    return new Promise((resolve, reject) => {
      if (n <= 1) {
        resolve(1);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve(factorialPromise(n - 1).then((prevFact: any) => prevFact * n));
      }
    });
  }

  useEffectOnce(() => console.log('useEffectOnce'));

  useUpdate(() => console.log(count), [count]);

  return (
    <div>
      Hello~! {new Date().toLocaleDateString()}
      <div>value: {value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>true</button>
      <button onClick={() => toggleValue(false)}>false</button>
      <div>count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default App;
