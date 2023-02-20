import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Headlinecards from './components/Headlinecards';
import Foods from './components/Foods';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Headlinecards/>
     <Foods/>
    </div>
  );
}

export default App;

