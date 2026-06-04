import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebsiteBuilder from './pages/WebsiteBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<WebsiteBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
