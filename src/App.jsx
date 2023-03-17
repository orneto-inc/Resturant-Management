import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Navabar from './components/Navbar';
import PosHomePage from './pos/PosHomePage';
import InventoryLandingPage from './invetory/InventoryLandingPage';
import LitticiousHomePage from './litticiousHome/LitticiousHomepage';
function App() {
  return (
    <div className="App">
      <LitticiousHomePage />
      
      
      
      
      {/* Route Configuration */}
      <Routes> 
        <Route path='/home' element={<PosHomePage />}></Route>
        <Route path="/inventory" element={<InventoryLandingPage />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
