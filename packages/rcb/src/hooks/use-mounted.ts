import { useRef, useEffect } from 'react';

export function useIsMountedRef() {
  const isMountedRef = useRef(null);
  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    isMountedRef.current = true;
    //@ts-ignore
    return () => (isMountedRef.current = false);
  });
  return isMountedRef;
}
