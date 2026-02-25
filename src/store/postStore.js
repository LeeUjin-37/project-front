import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(
  persist(
    (set) => ({
      posts: [],

      addPost: (post) =>
        set((state) => ({
          posts: [post, ...state.posts],
        })),

      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((p) => p.id !== id),
        })),

      updatePost: (id, patch) =>
        set((state) => ({
          posts: state.posts.map((p) => (p.id === id ? { ...p, ...patch } : p)),
        })),
    }),
    {
      name: "post-storage",
    },
  ),
);

export default usePostStore;
