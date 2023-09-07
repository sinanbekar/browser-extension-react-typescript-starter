import '../global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from './Options';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
