"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = exports.useTimeout = void 0;
var react_1 = require("react");
function useTimeout(callback, time, args) {
    if (args === void 0) { args = []; }
    var timeout = react_1.useRef();
    var stopTimeout = react_1.useCallback(function () {
        if (timeout.current)
            clearTimeout(timeout.current);
    }, [timeout]);
    react_1.useEffect(function () {
        timeout.current = setTimeout.apply(void 0, __spreadArray([callback, time], args));
        return function () {
            stopTimeout();
        };
    }, [callback, time, args, timeout, stopTimeout]);
    return { stopTimeout: stopTimeout };
}
exports.useTimeout = useTimeout;
function useInterval(callback, time, args) {
    if (args === void 0) { args = []; }
    var interval = react_1.useRef();
    var stopInterval = react_1.useCallback(function () {
        if (interval.current)
            clearInterval(interval.current);
    }, [interval]);
    react_1.useEffect(function () {
        interval.current = setInterval.apply(void 0, __spreadArray([callback, time], args));
        return function () {
            stopInterval();
        };
    }, [callback, time, args, interval, stopInterval]);
    return { stopInterval: stopInterval };
}
exports.useInterval = useInterval;
