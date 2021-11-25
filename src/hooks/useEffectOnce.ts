import { EffectCallback, useEffect } from 'react';

/**
 * componentDidMount를 모방한 훅으로 한 번만 실행하게 하려 할 때 유용한 훅입니다.
 */
export default function useEffectOnce(callback: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
}
