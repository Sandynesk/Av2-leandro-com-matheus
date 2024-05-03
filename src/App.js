import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Fotos from './components/Fotos';
import React from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import QuemSomos from './components/QuemSomos';

function App() {
  return (
    <div className="App">
        <Nav />
        <Fotos />

        <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/contato' element={<QuemSomos />} />
            <Route path='/quemsomos' element={<QuemSomos />} />

          </Routes>
        </BrowserRouter>  
        <Footer />
      </div>
   
  );
}

function Home() {
  <div>
    <Nav />
    <Fotos />
    
     <Footer />
  </div>
}

export default App;
