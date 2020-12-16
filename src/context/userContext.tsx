import React from 'react';
import { useUserData } from '../hooks/useUserData';
import { IUserData } from '../store/me/actions';
import { MeState } from '../store/me/reducer';


export const userContext = React.createContext<any>({

});

export function UserContextProvider({ children } : { children: React.ReactNode }) {
  const {data, loading} = useUserData();
  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}