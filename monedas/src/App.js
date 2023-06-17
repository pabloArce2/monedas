import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola buenas
        </p>
        <FirstComponent/>
      </header>
      <div class = "">
        <SecondComponent/>
      </div>
    </div>
    
  );
}

export default App;
