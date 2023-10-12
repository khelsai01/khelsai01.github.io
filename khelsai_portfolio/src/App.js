import logo from './logo.svg';
import './App.css';
import { Navbar } from './AllRouters/Navbar';
import { AllRouter } from './AllRouters/AllRouter';

function App() {
  return (
    <div className="App">
    <Navbar />
    <AllRouter />
    </div>
  );
}

export default App;
