import logo from './logo.svg';
import './App.css';
import { useWindowSize } from './components/windowSize';

function App() {
  
  const {height,width}=useWindowSize();

  return (
    <div className="App">
      The size is
      Height : {height}
      width : {width}
      
    </div>
  );
}

export default App;
