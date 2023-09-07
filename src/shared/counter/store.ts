import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { wrapStore } from 'webext-zustand';
import { localStorage } from 'redux-persist-webextension-storage';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  incrementAsync: (amount: number) => Promise<void>;
  incrementIfOdd: (amount: number) => void;
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set, get) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      incrementByAmount: (amount) => set((state) => ({ count: state.count + amount })),
      incrementAsync: async (_amount) => {
        const fetchAmount = async () =>
          new Promise<{ data: number }>((resolve) =>
            setTimeout(() => resolve({ data: _amount }), 500)
          );

        const { data: amount } = await fetchAmount();

        set((state) => ({ count: state.count + amount }));
      },
      incrementIfOdd: (amount) => {
        const { count, incrementByAmount } = get();
        if (count % 2 === 1) {
          incrementByAmount(amount);
        }
      },
    }),
    {
      name: 'root',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const counterStoreReadyPromise = wrapStore(useCounterStore);

export default useCounterStore;
