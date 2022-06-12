import { applyMiddleware, Store } from '@eduardoac-skimlinks/webext-redux';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

export const proxyStore = applyMiddleware(new Store(), ...middlewares);
