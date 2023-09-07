import '../global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { counterStoreReadyPromise } from '../shared/counter';
import Popup from './Popup';

counterStoreReadyPromise.then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  );
});
