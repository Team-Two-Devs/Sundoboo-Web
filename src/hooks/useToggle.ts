import { useCallback, useState } from 'react';

/**
 * 어떤 상태값을 반대로 변경하고 싶을 때 쓰는 유용하게 쓰이는 훅입니다.
 */
export default function useToggle(
  initialState: boolean = false
): [boolean, (value?: unknown) => void] {
  const [state, setState] = useState<boolean>(initialState);

  const toggleValue = useCallback(
    (value): void =>
      setState((currentValue) => (typeof value === 'boolean' ? value : !currentValue)),
    []
  );

  return [state, toggleValue];
}
