jest.useFakeTimers();

test('waits 1 second before ending the game', () => {
  /* eslint-disable-next-line */
  const timerGame = require('../../src/Timer Mocks/timerGame');
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test('calls the callback after 1 second', () => {
  /* eslint-disable-next-line */
  const timerGame = require('../../src/Timer Mocks/timerGame');
  const callback = jest.fn();

  timerGame(callback);

  expect(callback).not.toBeCalled();

  jest.runAllTimers();

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
