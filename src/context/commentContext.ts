import React from 'react';

export type comment = {
  name: string;
  time: string;
  text: string;
  category: string;
  ref?: any;
  // ref?: RefObject<HTMLTextAreaElement>;
  visibleComment?: boolean;
  id: number,
  comments?: Array<comment>
}

type commentContextType = {
  value: string,
  onChange: (value: string) => void,
  onChangeActive: (value: number) => void,
  onChangeComments: (value: comment[] | null) => void,
  allComments: comment[] | null,
  activeComment: number,
}

export const commentContext = React.createContext<commentContextType>({
  value: '',
  onChange: () => {},
  onChangeActive: () => {},
  activeComment: -1,
  allComments: [],
  onChangeComments: () => {},
});