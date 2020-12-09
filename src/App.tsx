import React, { useState,useRef } from 'react';
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
import { commentContext, comment  } from './context/commentContext';



function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState("");
  const [commentActive, setCommentActive] = useState(-1);
  const CommentProvider = commentContext.Provider;
  const [commentComments, setComments] = useState<comment[]|null>(
      [
      {
        name: "Artur 1 ",
        time: "1 h ago",
        text: "This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1",
        category: "League of Politicans",
        id: 1,
        ref: useRef<HTMLTextAreaElement>(null),
      },
      {
        name: "Artur 2 ",
        time: "2 h ago",
        text: "This is a text comment 2 , This is a text comment 2  , This is a text comment 2 , This is a text comment 2 , This is a text comment 2 ",
        category: "League of Humorists",
        id: 2,
        ref: useRef<HTMLTextAreaElement>(null),

        comments: [
          {
            name: "Artur 3 ",
            time: "3 h ago",
            text: "This is a text comment 3, This is a text comment 3 , This is a text comment 3, This is a text comment 3",
            category: "League of Novices",
            id: 3,
            ref: useRef<HTMLTextAreaElement>(null),

            },
        ]
      },
      {
        name: "Artur 4",
        time: "4  h ago",
        category: "League of Programmers",
        text: "This is a text comment 4, This is a text comment 3 , This is a text comment 3, This is a text comment 4",
        id: 4,
        ref: useRef<HTMLTextAreaElement>(null),

      },
    ]
  );
  return (
    <tokenContext.Provider value={token}>
      <CommentProvider value={{
        value: commentValue,
        onChange: setCommentValue,
        onChangeActive: setCommentActive,
        activeComment: commentActive,
        allComments: commentComments,
        onChangeComments: setComments,
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