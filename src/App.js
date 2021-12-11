
import './App.css';
import AuthScreen from './component/AuthScreen';

function App() {
  let isLogedIn = false

  return (
    <div className="">
      {isLogedIn?
        (<h1>loged in</h1>):
        (<AuthScreen />)
      }
    </div>
  );
}

export default App;
