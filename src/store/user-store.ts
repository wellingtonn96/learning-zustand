// src/stores/useUserStore.ts
import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserStore = {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      set({ users: data });
    } catch (error) {
      set({ error: "Erro ao buscar usuários" });
    } finally {
      set({ loading: false });
    }
  },
}));
