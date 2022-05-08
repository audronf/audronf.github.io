import { useEffect, useState } from 'react';
import './scss/App.scss';
import Typed from "react-typed";
import TypeIt from 'typeit-react';

const App = () => {
  const [mode, setMode] = useState("darkMode");
  useEffect(() => {
    mode === "darkMode" ? document.getElementById('container').classList.add("dark-mode") : document.getElementById('container').classList.add("light-mode")
  }, [mode]);
  return (
    <div className="App">
      <div id ="container" class="App-header">
        <h1>Federico Fasitella</h1>
        <TypeIt 
        className='typed'
        options = {{
          strings: [
          "🎓 Software Engineer @UADE",
          "💻 Technical Leader @Wolox",
          "🎮 También soy clavo en rocket league" ],
          speed: 100,
          loop: true,
          waitUntilVisible: true,
          lifeLike: true,
          breakLines: false,
          deleteSpeed: 50,
          nextStringDelay: 5000
        }} />
      </div>
    </div>
  );
}

export default App;
