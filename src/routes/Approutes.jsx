import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contacto" element={<Contacto />} />
    </Routes>
  )
}

export default Approutes;