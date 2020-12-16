import * as React from 'react';
import { userContext } from '../../../context/userContext';
import { useUserData } from '../../../hooks/useUserData';
import { Icon, EIcons } from '../../Icons/Icon';
import styles from './UserBlock.less';


export function UserBlock() {
  const {data, loading} = useUserData();
  const [innerWidth, setInnerWidth] = React.useState(0);

  React.useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [innerWidth]);
  return (
    <a 
    href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit`}
    className={styles.userBox}>
        <div className={styles.avatarBox}>
          {  data.iconImg
            ? <img src={data.iconImg} className={styles.avatarImage}></img>
            : <Icon name={EIcons.profile} size={innerWidth && innerWidth<1024?30:50}/>
          }
        </div>
        <div className={styles.username}>
          <span>
            {
              loading
              ? <span>Loading</span>
              : data.name || 'Anonymous'
            }
          </span>
        </div>
    </a>
  )
}