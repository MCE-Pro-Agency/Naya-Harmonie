import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';

// Pages
import Blog from './pages/Blog';
import Boutique from './pages/Boutique';
import Cgv from './pages/Cgv'; // ✅ AJOUT IMPORTANT
import Confidentialite from './pages/Confidentialite';
import Home from './pages/Home';
import Mentionlegales from './pages/Mentionlegales';
import Reservation from './pages/Reservation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="boutique" element={<Boutique />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cgv" element={<Cgv />} /> {/* ✅ corrigé */}
          <Route path="confidentialite" element={<Confidentialite />} />
          <Route path="Mentionlegales" element={<Mentionlegales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);