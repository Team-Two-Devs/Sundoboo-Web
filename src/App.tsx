import React from 'react';

const App = () => {
  function factorialPromise(n: number) {
    return new Promise((resolve, reject) => {
      if (n <= 1) {
        resolve(1);
      } else {
        resolve(factorialPromise(n - 1).then((prevFact: any) => prevFact * n));
      }
    });
  }

  return <div>Hello! {new Date().toLocaleDateString()}</div>;
};

export default App;
