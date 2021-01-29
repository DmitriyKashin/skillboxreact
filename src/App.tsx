import React, { useState,useRef, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import './main.global.less';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList';

// import { Dropdown } from './shared/Dropdown';
// import { GenericList } from './shared/GenericList/GenericList';
// import { tokenContext } from './context/tokenContext';
// import { useToken } from './hooks/useToken';

import { PostsContextProvider } from './context/postsContext';
import { commentContext, comment  } from './context/commentContext';
import { Provider, useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, RootState, setToken } from './store/reducer';
import { Action, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { BrowserRouter, Link, Switch, Router, Route } from 'react-router-dom';
import { Post } from './shared/Post/Post';

/*
const ping: Middleware = (store) => (next) => (action) => {
  console.log('ping:');
  next(action);
}

const pong: Middleware = (store) => (next) => (action) => {
  console.log('pong:');
  next(action);
}

const  timeout = (ms:number): ThunkAction<void, RootState, unknown, Action<string>>  => (dispatch, getState) => {
  dispatch({type: 'START'});
  setTimeout(() => {
    dispatch({type: 'FINISh'});
  }, ms)
}

*/


const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>>  => (dispatch, getState) => {
  if (window.__token__) {
    dispatch(setToken(window.__token__));
  }
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


const AppWrapper = () => {
  return (
    <Provider store={store}>
        <AppComponent />
    </Provider>
  )
}
function AppComponent() {
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    dispatch(saveToken());
    setMounted(true);
  }, []);
  const [commentValue, setCommentValue] = useState("");
  const [commentActive, setCommentActive] = useState(-1);
  const  CommentProvider = commentContext.Provider;
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

      <CommentProvider value={{
        value: commentValue,
        onChange: setCommentValue,
        onChangeActive: setCommentActive,
        activeComment: commentActive,
        allComments: commentComments,
        onChangeComments: setComments,
        }}>
          {mounted && (
            <BrowserRouter>
             <Layout>
             <Header/>
             <Content>
               <PostsContextProvider>
                 <CardsList/>
                 <Route path="/posts/:id">
                   <Post />
                 </Route>
               </PostsContextProvider>
             </Content>
           </Layout>
           </BrowserRouter>
          )}
      </CommentProvider>
  );
}
export const App = hot( () => <AppWrapper/>);