import { useCallback, useEffect, useRef } from "react";

export function useTimeout(callback: Function, time: number, args: any[] = []) {
  const timeout = useRef<number>();

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

export function useInterval(callback: Function, time: number, args: any[] = []) {
  const interval = useRef<number>();

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
