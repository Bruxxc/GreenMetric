import './App.css';
import { NavbarComponent } from "../src/components/Navbar/Navbar";
import { FooterComponent } from "../src/components/Footer/Footer";
import { Servicios } from './pages/Servicios/Servicios';
import { Inicio } from './pages/Inicio/Inicio';
import { Routes,Route } from 'react-router-dom';
import { useRef, useEffect } from "react";


function App() {
  return (
    <div id="top" className="App">
      
      <NavbarComponent/>
      <div className="Content">
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/servicios" element={<Servicios/>}></Route>
          <Route path="*" element={<h1>404 PÁGINA NO ENCONTRADA</h1>}></Route>
          
        </Routes>
      </div>
      <FooterComponent/>

    </div>
  );
}

export default App;
