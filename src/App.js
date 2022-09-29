import { Routes, Route } from 'react-router-dom';
import './App.css';
// import { useSelector } from 'react-redux';

// import React, { useState } from 'react';

import Products from './Pages/Products';
import Basket from './Pages/Basket';
import CardDescr from './Pages/CardDescr';
import Entrance from './Pages/Entrance';
import Registration from './Pages/Registration';




// Главная страница
function App() {

  // const check = useSelector(state => state.auth.isAuth);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/entrance' element={<Entrance />} />
        <Route path='/products' element={<Products />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/:id' element={<CardDescr />} />
      </Routes>
    </div>
  );
}

// Корзина
// function App() {
//   return (
//     <div>
//       <Basket />
//     </div>
//   );
// }

export default App;





