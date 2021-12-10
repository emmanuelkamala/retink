import './App.css';
import { Brand, Cta, Navbar } from './components';
import { About, Contact, Footer, Header, Services } from './containers';
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <About />
      <Services />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
