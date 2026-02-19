import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Unused from './components/Unused';

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/antigos" element={<Unused />} />
    </Routes>
  </StrictMode>
</BrowserRouter>
)
