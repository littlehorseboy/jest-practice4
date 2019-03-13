const http = require('http');

export default function request(url) {
  return new Promise((resolve) => {
    // This module is being mocked in __mock__/request.js
    http.get({ path: url }, (response) => {
      let data = '';
      response.on('data', (_data) => {
        data += _data;
        return data;
      });
      response.on('end', () => resolve(data));
    });
  });
}
