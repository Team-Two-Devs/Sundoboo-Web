import React from 'react';

import { useToggle } from './hooks';

const App = () => {
  const [value, toggleValue] = useToggle(false);

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

  return (
    <div>
      Hello~! {new Date().toLocaleDateString()}
      <div>value: {value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>true</button>
      <button onClick={() => toggleValue(false)}>false</button>
    </div>
  );
};

export default App;
