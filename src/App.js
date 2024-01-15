import logo from './logo.svg';
import TestComponent from './TestComponent';
import TestCounter from './TestCounter';
import TestProp from './TestProp';

export default function App() {
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
      <div
        style={{
          backgroundColor: 'yellow',
          fontFamily: 'sans-serif',
          padding: 20,
          maxWidth: 100,
        }}
      >
        This is a test!
      </div>
    </>
  );
}
