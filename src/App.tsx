import React, { useEffect, useLayoutEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import './main.global.less';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList';
import { Dropdown } from './shared/Dropdown';
import { GenericList } from './shared/GenericList/GenericList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';



function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header/>
          <Content>
            <CardsList/>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}
export const App = hot( () => <AppComponent/>);