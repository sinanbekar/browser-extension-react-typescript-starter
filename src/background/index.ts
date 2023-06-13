import browser from 'webextension-polyfill';

import store from '../app/store';

store.subscribe(() => {
  console.log('state', store.getState());
});

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    //show the welcome page
    const url = browser.runtime.getURL('welcome/welcome.html');
    await browser.tabs.create({ url });
  }
});

export {};
