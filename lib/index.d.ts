export declare function useTimeout(callback: Function, time: number, args?: any[]): {
    stopTimeout: () => void;
};
export declare function useInterval(callback: Function, time: number, args?: any[]): {
    stopInterval: () => void;
};
