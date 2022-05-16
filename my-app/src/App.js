import React from "react";
import './App.scss';
import useKeyPress from "./hooks/useKeyPress"
import KeyBoard from "./components/Keyboard"

function App() {

  const [currentKey, setCurrentKey] = React.useState();

  useKeyPress(key => {
    console.log(key)
    setCurrentKey(key);
  })

  return (
    <div className="App">
      <h1 className="title">Virtual Keyboard</h1>
      <div className="content">
        <KeyBoard  />
      </div>
    </div>
  );
}

export default App;
