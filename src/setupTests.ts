import { chrome } from 'jest-chrome';

import '@testing-library/jest-dom';

Object.assign(global, { chrome: chrome, browser: chrome });
