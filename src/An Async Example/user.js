import request from './request';

/* eslint-disable-next-line */
export function getUserName(userID) {
  return request(`/users/${userID}`).then(user => user.name);
}
