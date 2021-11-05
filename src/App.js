import './App.sass';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/Hero';
import Nav from './components/Navbar';

function App() {
  return (
      <Router>
        <Nav />
        <Hero></Hero>
      </Router>

  );
}

export default App;


