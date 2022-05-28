import { chrome } from 'jest-chrome';

describe('background', () => {
  test('chrome api events', () => {
    const listenerSpy = jest.fn();
    const sendResponseSpy = jest.fn();

    chrome.runtime.onMessage.addListener(listenerSpy);

    expect(listenerSpy).not.toBeCalled();
    expect(chrome.runtime.onMessage.hasListeners()).toBe(true);

    chrome.runtime.onMessage.callListeners(
      { greeting: 'hello' }, // message
      {}, // MessageSender object
      sendResponseSpy // SendResponse function
    );

    expect(listenerSpy).toBeCalledWith({ greeting: 'hello' }, {}, sendResponseSpy);
    expect(sendResponseSpy).not.toBeCalled();
  });
});
