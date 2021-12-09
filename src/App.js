import './App.css';
import { Brand, Cta, Navbar } from './components';
import { Contact, Footer, Header, Services } from './containers';
 
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
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
