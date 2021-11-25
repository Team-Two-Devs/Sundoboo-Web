import { DependencyList, EffectCallback, MutableRefObject, useEffect, useRef } from 'react';

type Destructor = void | (() => void);

/**
 * deps에 빈 배열 또는 undefined가 제공되면 componentDidMount 처럼 동작하고
 * state 또는 props 업데이트가 발생한 직후에 호출되도록 하는 훅입니다.
 */
export default function useUpdate(effect: EffectCallback, deps: DependencyList = []): void {
  const firstRenderRef: MutableRefObject<boolean> = useRef(true);

  useEffect((): Destructor => {
    if (firstRenderRef.current === true) {
      firstRenderRef.current = false;
      return;
    }
    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
