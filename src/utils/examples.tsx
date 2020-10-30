import React from 'react';


interface IBlockProps {
  title: string,
  id: string,
}
interface PossibleKeys {
  id: string,
}

const Block = (props: IBlockProps) => {
  return (
    <div>{props.title}</div>
  )
}

function Feed(props: {blocks: IBlockProps[] }) {
  return (
    <div>
      { props.blocks.map(withIdKey(Block))}
    </div>
  )
} 
const withIdKey = withKey('id');


function withKey(myKey?: keyof PossibleKeys) {
  return <E extends PossibleKeys, T extends React.ComponentType<E>>(component: T)  => 
    (props: E, index: number) => 
      React.createElement(
        component,
        {...props, key: myKey? props[myKey as keyof E] : index },
        []
      );
}

// [1]
// (block) => () => el // our func
// (el) =>  el  // map
// withIdKey(Block) = withKey('id')(Block) = () => el // == map




