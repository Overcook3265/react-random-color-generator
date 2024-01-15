import randomColor from 'randomcolor';
import { useState } from 'react';
import TestComponent from './TestComponent';
import TestCounter from './TestCounter';
import TestProp from './TestProp';

export default function App() {
  let iCol = '#ffff00';
  const [randCol, setRandCol] = useState(randomColor());

  return (
    <>
      <h1>Hello Word!</h1>
      <TestComponent />
      <br />
      <TestProp name="Methusalem" age={675} />
      <br />
      <h2>Test Counter</h2>
      <TestCounter />
      <br />
      {/*Create div element and style it*/}
      <div
        style={{
          backgroundColor: randCol,
          fontFamily: 'sans-serif',
          padding: 20,
          maxWidth: 100,
        }}
      >
        {randCol}
      </div>
      <br />
      <button
        onClick={() => {
          setRandCol(randomColor());
          console.log(randCol);
          //setEmojiIcon(newEmoji.emoji);
        }}
      >
        Generate
      </button>
    </>
  );
}
