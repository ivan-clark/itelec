import { useState, useEffect } from 'react';
import OperatorButton from './OperatorButton';
import TextBox from './TextBox';
import Panel from './Panel';

const App = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("HERE");

  return (
    <div className="App">
      {text}
      <TextBox number={number} />
      <OperatorButton handleNum={()=>setNumber(number+1)} text={"+"}/>
      <OperatorButton handleNum={()=>setNumber(number-1)} text={"-"}/>
      <Panel number={number} setText={setText}/>
    </div>
  );
}

export default App;
