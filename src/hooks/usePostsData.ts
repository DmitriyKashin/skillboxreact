
import Axios from 'axios';
import React, { useContext } from 'react';
import { tokenContext } from '../context/tokenContext';

interface IPostItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
}
export function usePostsData() {
  
  const [posts, setPosts] = React.useState<IPostItem[]>([]);

  const token = useContext(tokenContext);
  
  React.useEffect(() => {
    if (token && token != 'undefined' && token!='false') {
      Axios.get('https://oauth.reddit.com/best', {
        headers: {
          Authorization: `bearer ${token}`
        },
      }).then((resp) => {
        const bestPosts = resp.data.data.children;
        bestPosts.map((post: any) => {
          post.text = post.data.title;
          post.id = post.data.id;
        })
        console.log(bestPosts,'NEW ! posts');
        setPosts(bestPosts);
      })
      .catch(console.log);
    }
  }, [token])
  return [posts];
}