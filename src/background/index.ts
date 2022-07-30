import browser from 'webextension-polyfill';

import store from '../app/store';
import { isDev } from '../shared/utils';

store.subscribe(() => {
  console.log('state', store.getState());
});

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    //show the welcome page
    const url = browser.runtime.getURL(isDev ? 'src/welcome/welcome.html' : 'welcome.html'); // TODO: better approach
    await browser.tabs.create({ url });
  }
});

export {};
