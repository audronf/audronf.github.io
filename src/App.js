import { useEffect, useState } from 'react';
import './scss/App.scss';
import TypeIt from 'typeit-react';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  return (
    <div className="App">
      <div id="container" class="container dark-mode">
        <div className="toggle-container">
          <DarkModeToggle/>
        </div>
        <h1>Federico Fasitella</h1>
        <TypeIt 
        className='typed'
        options = {{
          strings: [
          "🎓 Software Engineer @ UADE",
          "💻 Technical Leader @ Wolox",
          "🎮 También soy clavo en rocket league" ],
          speed: 100,
          loop: true,
          waitUntilVisible: true,
          lifeLike: true,
          breakLines: false,
          deleteSpeed: 50,
          nextStringDelay: 7500
        }} />
      </div>
    </div>
  );
}

export default App;
