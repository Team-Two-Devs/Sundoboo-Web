import { useCallback, useState } from 'react';

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
