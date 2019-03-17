jest.useFakeTimers();

describe('infiniteTimerGame', () => {
  test('schedules a 10-second timer after 1 second', () => {
    /* eslint-disable-next-line */
    const infiniteTimerGame = require('../../src/Timer Mocks/infiniteTimerGame');
    const callback = jest.fn();

    infiniteTimerGame(callback);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    jest.runOnlyPendingTimers();

    expect(callback).toBeCalled();

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});
