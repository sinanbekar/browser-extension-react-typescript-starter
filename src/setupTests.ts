import '@testing-library/jest-dom';
import { chrome } from 'jest-chrome';

Object.assign(global, { chrome: chrome, browser: chrome });
