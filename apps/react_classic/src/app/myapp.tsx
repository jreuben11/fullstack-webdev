import { useState } from 'react';

import Profile from './profile';
import ShoppingList from './shopping_list';
import Game from './tic_tac_toe';

interface ButtonProps {
  width?: string;
}

function MyButton({ width, count, onClick }) {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button onClick={onClick} style={{ width }}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <h1>Counters that no longer update separately</h1>
          <MyButton width="100px" count={count} onClick={handleClick} />
          <MyButton width="200px" count={count} onClick={handleClick} />
        </div>
        <Profile />
        <ShoppingList />
      </div>
      <h1>Game with css:</h1>
      <Game />
    </div>
  );
}
