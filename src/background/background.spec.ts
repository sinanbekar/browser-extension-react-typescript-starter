import { chrome as browser } from 'jest-chrome';

describe('background', () => {
  test('chrome api events', () => {
    const listenerSpy = jest.fn();
    const sendResponseSpy = jest.fn();

    browser.runtime.onMessage.addListener(listenerSpy);

    expect(listenerSpy).not.toBeCalled();
    expect(browser.runtime.onMessage.hasListeners()).toBe(true);

    browser.runtime.onMessage.callListeners(
      { greeting: 'hello' }, // message
      {}, // MessageSender object
      sendResponseSpy // SendResponse function
    );

    expect(listenerSpy).toBeCalledWith({ greeting: 'hello' }, {}, sendResponseSpy);
    expect(sendResponseSpy).not.toBeCalled();
  });
});
