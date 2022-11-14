// import logo from './logo.svg';
import './App.css';
import Change from './components/Change';
import Counter from './components/Counter';
import Effect from './components/Effect';
import Reducer from './components/Reducer';
import Reference from './components/Reference';


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
      <br />
      <div>
        <Effect />
      </div>
      <br />
      <div>
        <Reference />
      </div>
    </div>
  );
}

export default App;
