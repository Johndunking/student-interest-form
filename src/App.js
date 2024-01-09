import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Survey from './components/Survey';
import Search from './components/Search';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey" element={<Survey />} />
        <Route path="search" element={<Search />} />
      </Routes>
  );
};

export default App;
