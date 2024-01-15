import { useState } from 'react';

export default function TestCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
