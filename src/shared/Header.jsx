import * as React from 'react';
import { hot } from 'react-hot-loader/root';


function HeaderComponent() {
  return (
    <header>
      <h1>Hello, Skillbox! 12345</h1>
      <p>Hot change</p>
    </header>
  )
}
export const Header = hot(HeaderComponent);