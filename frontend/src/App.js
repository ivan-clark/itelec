import { useState, useEffect } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("HERE");

  return (
    <div className="App">
      <h1>This is a header</h1>
    </div>
  );
}

export default App;
