import React, {useEffect, useState} from 'react';
import styles from './dropdown.less';


interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
}
const NOOP = () => {};

export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  
  useEffect(() => isDropdownOpen ? onOpen(): onClose(), [isDropdownOpen]);
  useEffect(() => setIsDropdownOpen(isOpen),[isOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }
  return (
    <div className={styles.container}>
      <div onClick={handleOpen} className={styles.button}>
        { button }
      </div>
      {isDropdownOpen &&  (
        <div className={styles.listContainer}>
            <div className={styles.list} onClick = {() => setIsDropdownOpen(false)}>
              {children}
            </div>
        </div>
      )}
    </div>
  );
}
