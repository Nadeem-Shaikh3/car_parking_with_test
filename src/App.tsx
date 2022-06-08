import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParkingSpacesContext from './Contexts/ParkingSpacesContext';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ParkingSpaces from './Pages/ParkingSpaces';
import PaymentDetails from './Pages/payment_details';

function App() {
  return (
    <ParkingSpacesContext>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/parking-spaces' element={<ParkingSpaces/>}/>
        <Route path='/payment-detail' element={<PaymentDetails/>}/>
      </Routes>
    </ParkingSpacesContext>
  );
}

export default App;
