import { useEffect, useState } from 'react';
import './scss/App.scss';
import Typed from "react-typed";

const App = () => {
  const [mode, setMode] = useState("darkMode");
  useEffect(() => {
    mode === "darkMode" ? document.getElementById('container').classList.add("dark-mode") : document.getElementById('container').classList.add("light-mode")
  }, [mode]);
  return (
    <div className="App">
      <div id ="container" class="App-header">
        <h1>Federico Fasitella</h1>
        <Typed 
        className='typed'
        strings={[
          "Software Engineer"
        ]}
        typeSpeed = { 100 }
        backDelay = { 5000 }
        backSpeed = { 30 }
        loop />
      </div>
    </div>
  );
}

export default App;
