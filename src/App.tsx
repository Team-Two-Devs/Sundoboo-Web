import React, { useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { useEffectOnce, useToggle, useUpdate } from './hooks';
import { global } from './styles';
import { Test } from './components/common';
import { darkTheme, lightTheme } from './styles/theme';

const App = () => {
  const [isDark, toggleIsDark] = useToggle(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
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

  const AppLayout = styled.main`
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text['critical-default']};
  `;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <AppLayout>
        <Global styles={global} />
        {isDark ? 'Dark' : 'Light'} Mode
        <button type="button" onClick={toggleIsDark}>
          Change Theme!
        </button>
        <div>count: {count}</div>
        <button onClick={handleIncrement}>Increment</button>
        <Test />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
