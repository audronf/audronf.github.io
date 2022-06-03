import './scss/App.scss';
import TypeIt from 'typeit-react';
import DarkModeToggle from './components/DarkModeToggle';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import mail from './assets/mail.png';

const App = () => {
  return (
    <div className="App">
      <div id="container" class="container dark-mode">
        <h1>Federico Fasitella</h1>
        <TypeIt 
        className='typed'
        options = {{
          strings: [
          "🎓 Software Engineer @ UADE",
          "💻 Technical Leader @ Wolox",
          "🎮 I also like videogames" ],
          speed: 100,
          loop: true,
          waitUntilVisible: true,
          lifeLike: true,
          breakLines: false,
          deleteSpeed: 50,
          nextStringDelay: 7500
        }} />
        <div className='info'>
          <span>Currently focusing on Android development and improving my leadership skills 🤖.</span>
          <span>Feel free to contact me!</span>
        </div>
        <div className='social tint' id='social'>
          <a href="https://github.com/audronf"><img className='social-image' src={github}/></a>
          <a href="https://www.linkedin.com/in/federico-daniel-fasitella-gomila-97543a173"><img className='social-image' src={linkedin}/></a>
          <a href="mailto:federicofasitella@gmail.com"><img className='social-image' src={mail}/></a>
        </div>
        <div className="toggle-container">
          <DarkModeToggle/>
        </div>
      </div>
    </div>
  );
}

export default App;
