import randomColor from 'randomcolor';
import { useState } from 'react';

// import TestComponent from './TestComponent';
// import TestCounter from './TestCounter';
// import TestProp from './TestProp';

export default function App() {
  let iCol = '#ffff00';
  const [randCol, setRandCol] = useState(randomColor());

  return (
    <>
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
      <br />
      <br />
      {/*Create div element and style it*/}
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
