import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import './main.global.less';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList';
import { assignId, generateId, generateRandomIndex } from './utils/react/generateRandomIndex';
import { GenericList, MyList } from './shared/GenericList/GenericList';
import { assoc } from './utils/js/assoc';
import { merge } from './utils/js/merge';



const LIST = [
  { value: 'some' },
  { value: 'some1' },
  { value: 'some2' },
  { value: 'some3' },
].map(generateId);

const GLIST = [
  { text: 'gsome', As: 'a' as const },
  { text: 'gsome1', As: 'a' as const },
  { text: 'gsome2', As: 'a' as const },
  { text: 'gsome3', As: 'a'  as const},
].map(generateId);




function AppComponent() {
  const [list, setList] = useState(LIST);
  const [glist, setGList] = useState(GLIST);

  const handleItemClick = (id: string) => {
   setList(list.filter((item) => item.id != id));
  }
  const handleItemClickG = (id: string) => {
    setGList(glist.filter((item) => item.id != id));
   }
  const handleAdd = () => {
    setList(list.concat(generateId({value: generateRandomIndex()})));
   }
  const handleAddG = () => {
    setGList(glist.concat(generateId({text: generateRandomIndex(), As: 'a' as const})));
  }
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
        <button onClick={handleAdd}>Add new</button>
        <MyList list={list.map(merge({onClick: handleItemClick}))}/>
        <ul>
          <GenericList list={GLIST.map(merge({onClick: handleItemClickG}))}/>
        </ul>
      </Content>
    </Layout>
  );
}

export const App = hot( () => <AppComponent/>);