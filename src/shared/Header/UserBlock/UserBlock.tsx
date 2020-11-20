import * as React from 'react';
import { Icon, EIcons } from '../../Icons/Icon';
import styles from './UserBlock.less';

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string,
}
export function UserBlock({avatarSrc, username} : IUserBlockProps) {
  return (
    <a 
    href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit`}
    className={styles.userBox}>
        <div className={styles.avatarBox}>
          {  avatarSrc
            ? <img src={avatarSrc} className={styles.avatarImage}></img>
            : <Icon name={EIcons.profile} size={50}/>
          }
        </div>
        <div className={styles.username}>
          <span>
            {username || 'Anonymous'}
          </span>
        </div>
    </a>
  )
}