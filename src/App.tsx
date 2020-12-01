import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import './main.global.less';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList';
// import { Dropdown } from './shared/Dropdown';
// import { GenericList } from './shared/GenericList/GenericList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { PostsContextProvider } from './context/postsContext';
import { commentContext  } from './context/commentContext';



function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState("");
  const CommentProvider = commentContext.Provider;

  return (
    <tokenContext.Provider value={token}>
      <CommentProvider value={{
        value: commentValue,
        onChange: setCommentValue,
        }}>
        <UserContextProvider>
          <Layout>
            <Header/>
            <Content>
              <PostsContextProvider>
                <CardsList/>
              </PostsContextProvider>
            </Content>
          </Layout>
        </UserContextProvider>
      </CommentProvider>
      </tokenContext.Provider>
  );
}
export const App = hot( () => <AppComponent/>);