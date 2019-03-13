jest.mock('../../src/An Async Example/request');

/* eslint-disable-next-line */
import * as user from '../../src/An Async Example/user';

test('tests error with promises', () => {
  expect.assertions(1);
  return user.getUserName(2).catch(e => expect(e).toEqual({
    error: 'User with 2 not found.',
  }));
});

test('tests error with rejects', () => {
  expect.assertions(1);
  expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});

test('tests error with async/await', async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: 'User with 1 not found.',
    });
  }
});

test('tests error with async/await and rejects', async () => {
  expect.assertions(1);
  await expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});
