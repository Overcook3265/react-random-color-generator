import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [randCol, setRandCol] = useState(randomColor());

  return (
    <div
      style={{
        backgroundColor: randCol,
        borderRadius: 5,
        fontFamily: 'sans-serif',
        padding: 20,
        maxWidth: 200,
        textAlign: 'center',
      }}
    >
      <br />
      <button
        onClick={() => {
          setRandCol(randomColor());
        }}
        style={{
          backgroundColor: '#424242',
          borderColor: 'white',
          borderRadius: 5,
          color: 'white',
          height: 50,
          padding: 10,
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
    </div>
  );
}
