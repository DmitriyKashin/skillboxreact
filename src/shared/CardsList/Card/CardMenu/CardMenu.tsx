
import React from 'react';
import { merge } from '../../../../utils/js/merge';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList/GenericList';
import { CardMenuButton } from '../CardMenuButton';
import styles from './cardmenu.less';


interface IComponentWithClass{
  className? : string,
}


const GLIST = [
{ text: 'Comments', As: 'li' as const, 'icon': 'message', className: 'list_underline_grey card_dropdown' },
  { text: 'Share', As: 'li' as const, className: 'list_underline_grey card_dropdown' },
  { text: 'Hide', As: 'li' as const, className: 'list_underline_grey card_dropdown' },
  { text: 'Save', As: 'li'  as const, className: 'list_underline_grey card_dropdown'},
  { text: 'Complain', As: 'li'  as const, className: 'card_dropdown'},
].map(generateId);


export function CardMenu( {className} : IComponentWithClass) {
  const handleItemClickG = (id: string) => {
    console.log('clicked item');
  }
  return (
    <div className={className}>
        <Dropdown button={<CardMenuButton />} 
              onOpen={() => console.log('open')}
              onClose={() => console.log('close')}
        >
        <ul className={styles.Dropdown}>
          <GenericList list={GLIST.map(merge({onClick: handleItemClickG}))}/>
        </ul>
      </Dropdown>
   </div>
  );
}




