import { useState, useSyncExternalStore } from "react";
import { blogPosts as initialPosts, type BlogPost } from "@/data/blogPosts";

// Simple in-memory store with reactivity
let posts: BlogPost[] = [...initialPosts];
let listeners: Set<() => void> = new Set();

function emitChange() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return posts;
}

export function useBlogStore() {
  const currentPosts = useSyncExternalStore(subscribe, getSnapshot);

  const addPost = (post: Omit<BlogPost, "id">) => {
    const newPost: BlogPost = {
      ...post,
      id: String(Date.now()),
    };
    posts = [newPost, ...posts];
    emitChange();
  };

  const removePost = (id: string) => {
    posts = posts.filter((p) => p.id !== id);
    emitChange();
  };

  const updatePost = (id: string, updated: Partial<BlogPost>) => {
    posts = posts.map((p) => (p.id === id ? { ...p, ...updated } : p));
    emitChange();
  };

  const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

  const getRelatedPosts = (slug: string, category: string) =>
    posts.filter((p) => p.slug !== slug && p.category === category).slice(0, 3);

  const getFeaturedPosts = () => posts.filter((p) => p.featured);

  const getPostsByCategory = (category: string) =>
    category === "All" ? posts : posts.filter((p) => p.category === category);

  return {
    posts: currentPosts,
    addPost,
    removePost,
    updatePost,
    getPostBySlug,
    getRelatedPosts,
    getFeaturedPosts,
    getPostsByCategory,
  };
}
