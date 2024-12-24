import { generateId } from "@/core/utils/generateId/generateId";
import { create } from "zustand";
import { ErrorStoreState } from "./errors.interfaces";

export const useErrorStore = create<ErrorStoreState>(set => ({
  errors: [],
  addError: (message, id) =>
    set((state) => ({
      errors: [...state.errors, { id: id ?? generateId(), message }],
    })),
  removeError: (id) =>
    set((state) => ({
      errors: state.errors.filter((error) => error.id !== id),
    })),
  clearErrors: () => set({ errors: [] }),
}));
