import React from 'react';

import { usePostsData } from '../hooks/usePostsData';

interface IPostItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
}

export const postsContext = React.createContext<IPostItem[]>([]);

export function PostsContextProvider({ children } : { children: React.ReactNode }) {
  const [posts] = usePostsData();
  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  )
}