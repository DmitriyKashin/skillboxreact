import React, {useEffect, useState, useRef} from 'react';
import styles from './dropdown.less';
import { DropdownPortal } from './DropdownPortal';


interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
}
interface iCoords {
  x: number,
  y: number,
}
const NOOP = () => {};

export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const [dropdownCoords, setDropdownCoords] = useState<iCoords>({x: 0, y: 0});
  const ref = useRef<HTMLDivElement>(null);

  
  useEffect(() => isDropdownOpen ? onOpen(): onClose(), [isDropdownOpen]);
  useEffect(() => setIsDropdownOpen(isOpen),[isOpen]);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
    const boundings = event.currentTarget.getBoundingClientRect();
    setDropdownCoords({
      x: boundings.x,
      y: event.pageY,
    })
  }
  useEffect(() => {
    console.log('useffect dropdown');
    function handleClick(event: MouseEvent) {
      console.log('here I am');
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  return (
    <div className={styles.container} ref={ref}>
      <div onClick={handleOpen} className={styles.button}>
        { button }
      </div>
      {isDropdownOpen &&  (
        <DropdownPortal coords={dropdownCoords} children={children} onClick={() => setIsDropdownOpen(false)}/>
      )}
    </div>
  );
}
