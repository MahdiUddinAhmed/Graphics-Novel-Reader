
import React from 'react';
import ReactDOM from 'react-dom';

// import page files
import App from './App';
import Comiclist from "./pages/Comiclist";
import ComicDesc from "./pages/ComicDesc";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chapter from './pages/Chapter';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/comiclist" element={<Comiclist />} />
        <Route path="/comic/:comicId" element={<ComicDesc />} />
        <Route path="/comic/:comicId/chapter/:chapterId" element={<Chapter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
