import './App.css';
import { Navbar } from './components';
import { Header } from './containers';
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="gradient__bg">
        <Header />
      </div>
    </div>
  );
}

export default App;
