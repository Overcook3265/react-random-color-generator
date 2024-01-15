import randomColor from 'randomcolor';
import { useState } from 'react';
import TestComponent from './TestComponent';
import TestCounter from './TestCounter';
import TestProp from './TestProp';

export default function App() {
  const rCol = randomColor();
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
          backgroundColor: rCol,
          fontFamily: 'sans-serif',
          padding: 20,
          maxWidth: 100,
        }}
      >
        This is a test!
      </div>
      <br />
    </>
  );
}
