import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, Store } from '@eduardoac-skimlinks/webext-redux';
import thunkMiddleware from 'redux-thunk';

import Content from './Content';

withProxyStore(<Content />).then((component) => {
  const container = document.createElement('my-extension-root');
  document.body.append(container);
  createRoot(container).render(component);
});

async function withProxyStore(children: ReactElement, proxyStore?: Store): Promise<ReactElement> {
  const store = proxyStore ?? new Store();

  const middleware = [thunkMiddleware];
  const storeWithMiddleware = applyMiddleware(store, ...middleware);

  return storeWithMiddleware.ready().then(() => {
    return <Provider store={store}>{children}</Provider>;
  });
}
