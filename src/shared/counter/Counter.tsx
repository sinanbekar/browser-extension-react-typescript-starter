import { useState } from 'react';
import { useCounterStore } from './store';

export function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const incrementIfOdd = useCounterStore((state) => state.incrementIfOdd);

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="p-2">
      <div className="flex items-center justify-center mb-4">
        <button
          className="ml-1 mr-2 px-3 text-2xl outline-none border-2 border-solid border-transparent text-purple-500 pb-1 cursor-pointer bg-purple-800 bg-opacity-10 hover:bg-opacity-20 rounded-[2px]"
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className="text-7xl px-4 mt-0.5 font-mono">{count}</span>
        <button
          className="ml-1 mr-2 px-3 text-2xl outline-none border-2 border-solid border-transparent text-purple-500 pb-1 cursor-pointer bg-purple-800 bg-opacity-10 hover:bg-opacity-20 rounded-[2px]"
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center mb-4">
        <input
          className="text-3xl p-0.5 w-16 text-center mr-1 border-[1px]"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="ml-1 mr-2 px-3 pb-1 text-2xl outline-none border-2 border-solid border-transparent text-purple-500 bg-purple-800 bg-opacity-10 hover:bg-opacity-20 rounded-[2px]"
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className="ml-1 mr-2 px-3 pb-1 text-2xl outline-none border-2 border-solid border-transparent text-purple-500 bg-purple-800 bg-opacity-10 hover:bg-opacity-20 rounded-[2px]"
          onClick={() => incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className="ml-1 mr-2 px-3 pb-1 text-2xl outline-none border-2 border-solid border-transparent text-purple-500 bg-purple-800 bg-opacity-10 hover:bg-opacity-20 rounded-[2px]"
          onClick={() => incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
