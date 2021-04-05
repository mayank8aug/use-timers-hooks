# use-timers-hooks

> Custom Hooks to schedule execution of functions based on the timeout or interval passed.

[![NPM](https://img.shields.io/npm/v/use-timers-hooks.svg)](https://www.npmjs.com/package/use-timers-hooks) ![npm](https://img.shields.io/npm/dm/use-timers-hooks)

## Install

```bash
npm install use-timers-hooks
```

## Usage

```jsx
import { useState } from "react";
import { useInterval, useTimeout } from "use-timers-hooks";

function MyTimerComponent() {
  const [count, setCount] = useState(0);
  const [timeoutText, setTimeoutText] = useState(null);
  const { stopInterval } = useInterval((arg) => setCount(arg), 4000, [
    count + 1
  ]);
  const { stopTimeout } = useTimeout(
    (text) => {
      setTimeoutText(text);
    },
    3000,
    ["Timeout Callback Executed"]
  );
  /* PS: If you are using both interval and timeout together,
  make sure that your execution thread is not blocked */
  return (
    <div className="App">
      <div>
        <button type="button" onClick={stopInterval}>
          Stop Interval
        </button>
        <strong>Count: {count}</strong>
      </div>
      <br />
      <div>
        <button type="button" onClick={stopTimeout}>
          Stop Timeout
        </button>
        {timeoutText && <strong>{timeoutText}</strong>}
      </div>
    </div>
  );
}
```

## Examples

To play around with these hooks, try these interactive sample apps

[CodeSandbox](https://codesandbox.io/s/use-timers-hooks-bf9lw)


## Parameters

All the hooks will take below parameters

| Param | Type | Optional | Default | Description |
| --- | :---: | :---: | :---: | --- |
| callback | Function | No | - | The callback function to be executed once the timeout/interval has passed |
| time | Number | No | - | Time duration for the timeout/interval in milliseconds |
| args | Array | Yes | - | Array of args to be passed to the callback |


## Returns

An object containing below properties

| Prop | Return Type | Description |
| --- | :---: | --- |
| stopInterval/stopTimeout | Function | The helper functions to end the interval/timeout programmatically  |


## Signature

```js
const { stopInterval } = useInterval(callback, time, args);
const { stopTimeout } = useTimeout(callback, time, args);
```

## License

MIT © [mayank8aug](https://github.com/mayank8aug)