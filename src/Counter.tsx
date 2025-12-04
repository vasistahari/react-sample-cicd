import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div>
        <strong>Count:</strong> <span data-testid="count-value">{count}</span>
      </div>

      <div style={{ marginTop: 12 }}>
        <button onClick={increment} aria-label="increment">
          +1
        </button>
        <button
          onClick={decrement}
          aria-label="decrement"
          style={{ marginLeft: 8 }}
        >
          -1
        </button>
        <button onClick={reset} aria-label="reset" style={{ marginLeft: 8 }}>
          reset
        </button>
      </div>
    </div>
  );
}
