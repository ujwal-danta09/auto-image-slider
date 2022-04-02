import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import {data} from './data'


function App() {
  return (
    <div className="container">
    <Slider data={data}/>
    </div>
  );
}

export default App;
