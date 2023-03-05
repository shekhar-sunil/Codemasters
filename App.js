//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
import About from './About';
import Services from './Services';

import Navbar from './Navbar';
const App=()=>

{
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact/>}/>
        
  
    </Routes>
  </BrowserRouter>
  );
};

export default App;
