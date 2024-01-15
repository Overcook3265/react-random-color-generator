import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [randCol, setRandCol] = useState(randomColor());

  return (
    <>
      <br />
      <button
        onClick={() => {
          setRandCol(randomColor());
        }}
      >
        Generate
      </button>
      <br />
      <br />
      <div
        style={{
          backgroundColor: randCol,
          fontFamily: 'sans-serif',
          padding: 20,
          maxWidth: 150,
          minHeight: 50,
          textAlign: 'center',
        }}
      >
        Generated Color: {randCol}
      </div>
      <br />
    </>
  );
}
