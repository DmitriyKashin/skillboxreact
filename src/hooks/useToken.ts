import { useEffect, useState } from 'react';

export function useToken() {
  const [token, setToken]  = useState('');
  useEffect(() => {
    console.log(window.__token__,'set token');
    if (window.__token__) {
      setToken(window.__token__);
    }
  }, []);
  return [token];
}