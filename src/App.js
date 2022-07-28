import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import  Home from './pages/Home/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
              <Route path='/' exact element={<Home />}></Route>
        </Routes>
    </Router>
    </>
  );
};

export default App;
