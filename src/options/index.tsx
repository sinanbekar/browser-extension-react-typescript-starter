import React from 'react';
import { createRoot } from 'react-dom/client';

import Options from './Options';

import '../tailwind.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
