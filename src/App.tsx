import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import './main.global.less';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList';
import { Dropdown } from './shared/Dropdown';
import { GenericList } from './shared/GenericList/GenericList';


function AppComponent() {

  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
      </Content>
      
    </Layout>
  );
}

export const App = hot( () => <AppComponent/>);