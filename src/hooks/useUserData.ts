
import Axios from 'axios';
import React  from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// import { tokenContext } from '../context/tokenContext';
interface IUserData {
  name?: string,
  iconImg?: string,
}
export function useUserData() {
  
  const [data, setData] = React.useState<IUserData>({
    name: '',
    iconImg: '',
  });
  // const token = useContext(tokenContext);
  
  const token = useSelector<RootState, string>(state => state.token);

  
  React.useEffect(() => {
    if (token && token != 'undefined' && token!='false') {
      Axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {
          Authorization: `bearer ${token}`
        },
      }).then((resp) => {
        const userData = resp.data;
        setData( { name : userData.name, iconImg: userData.icon_img });
      })
      .catch(console.log);
    }
  }, [token])
  return [data];
}