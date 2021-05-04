import logo from './logo.svg';
import './App.css';
import SignIn from './SignInSide'; //

function App() {
  return (
    <div className="App">
      <div>
        {SignIn()}
      </div>
    </div>
  );
}

export default App;
