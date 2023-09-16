//import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import School from "./pages/School";
import Hospital from "./pages/Hospital";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/school" exact element={<School/>}/>
          <Route path="/hospital" exact element={<Hospital/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
