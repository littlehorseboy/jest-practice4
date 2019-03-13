jest.mock('../../src/An Async Example/request');

/* eslint-disable-next-line */
import * as user from '../../src/An Async Example/user';

it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

it('works with resolves', () => {
  expect.assertions(1);
  expect(user.getUserName(5)).resolves.toEqual('Paul');
});

it('works with async/await', async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toEqual('Mark');
});

it('works with async/await and resolves', async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual('Paul');
});
