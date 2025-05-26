import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type BearState = {
  bears: number;
  increase: () => void;
  reset: () => void;
};

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      immer((set) => ({
        bears: 0,
        increase: () =>
          set(
            (state) => {
              state.bears += 1; // ✅ mutação direta
            },
            false,
            "bear/increase"
          ),
        reset: () =>
          set(
            (state) => {
              state.bears = 0;
            },
            false,
            "bear/reset"
          ),
      })),
      {
        name: "bear-storage",
      }
    ),
    {
      name: "bear-devtools",
    }
  )
);
