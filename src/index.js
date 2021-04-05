import { createRef, useCallback, useEffect } from "react";

export function useTimeout(callback, time, args = []) {
  const timeout = createRef();

  const stopTimeout = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
  }, [timeout]);

  useEffect(() => {
    timeout.current = setTimeout(callback, time, ...args);
    return () => {
      stopTimeout();
    };
  }, [callback, time, args, timeout, stopTimeout]);

  return { stopTimeout };
}

export function useInterval(callback, time, args = []) {
  const interval = createRef();

  const stopInterval = useCallback(() => {
    if (interval.current) clearInterval(interval.current);
  }, [interval]);

  useEffect(() => {
    interval.current = setInterval(callback, time, ...args);
    return () => {
      stopInterval();
    };
  }, [callback, time, args, interval, stopInterval]);

  return { stopInterval };
}
