import store from '../app/store';

store.subscribe(() => {
  console.log('state', store.getState());
});

// show welcome page on new install
chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    //show the welcome page
    const url = chrome.runtime.getURL('src/welcome/welcome.html');
    await chrome.tabs.create({ url });
  }
});

export {};
