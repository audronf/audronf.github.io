import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './scss/App.scss';
import Typed from "react-typed";

const App = () => {
  const [mode, setMode] = useState("darkMode");
  useEffect(() => {
    mode === "darkMode" ? document.getElementById('app-header').classList.add("dark-mode") : document.getElementById('app-header').classList.add("light-mode")
  }, [mode]);
  return (
    <div className="App">
      <header id="app-header" className="App-header">
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
      </header>
    </div>
  );
}

export default App;
