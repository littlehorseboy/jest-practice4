jest.useFakeTimers();

it('calls the callback after 1 second via advanceTimerByTime', () => {
  /* eslint-disable-next-line */
  const timerGame = require('../../src/Timer Mocks/timerGame');
  const callback = jest.fn();

  timerGame(callback);

  expect(callback).not.toBeCalled();

  jest.advanceTimersByTime(1000);

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
