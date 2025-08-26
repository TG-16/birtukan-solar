import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Installtion from "./pages/Installtion";
import Products from './pages/Products';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>

        
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/installations" element={<Installtion />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Home /> /* page not found page */} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;