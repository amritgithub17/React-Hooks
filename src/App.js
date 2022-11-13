// import logo from './logo.svg';
import './App.css';
import Change from './components/Change';
import Counter from './components/Counter';
import Reducer from './components/Reducer';


function App() {
  return (
    <div>
      <div>
      <Counter />
      </div>
      <br />
      <div>
        <Change />
      </div>
      <br />
      <div>
        <Reducer />
      </div>
    </div>
  );
}

export default App;
