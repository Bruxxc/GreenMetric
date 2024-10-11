import './App.css';
import { NavbarComponent } from "../src/components/Navbar/Navbar";
import { FooterComponent } from "../src/components/Footer/Footer";
import { Servicios } from './pages/Servicios/Servicios';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="Content">
        <Servicios></Servicios>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
