import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={'/'} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;





