import React from 'react';
import { createRoot } from 'react-dom/client';

import style from '../index.css?inline'; // include Tailwind CSS
import { isDev } from '../shared/utils';

import Content from './Content';

// isolated content injection
const container = document.createElement('x-my-extension');
const root = document.createElement('div');
const styleEl = document.createElement('style');
const shadowDOM = container.attachShadow?.({ mode: isDev ? 'open' : 'closed' }) || container;
styleEl.setAttribute('type', 'text/css');
styleEl.textContent = style; // TODO: include only used classes in Content.tsx and its children
shadowDOM.appendChild(styleEl);
shadowDOM.appendChild(root);
document.body.prepend(container);

createRoot(root).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);
