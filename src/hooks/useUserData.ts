
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { IUserData,meRequestAsync,} from '../store/me/actions';

export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);

  const token = useSelector<RootState, string>(state => state.token);
  const dispatch  = useDispatch();
  
  React.useEffect(() => {
    if (token && token != 'undefined' && token!='false') {
      dispatch(meRequestAsync());
    }
  }, [token])
  return {
    data,
    loading
  };
}