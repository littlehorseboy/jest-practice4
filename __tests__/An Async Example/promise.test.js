function request() {
  return new Promise((resolve) => {
    resolve('data');
  });
}

it('promise resolve `data`', () => {
  request().then((data => expect(data).toEqual('data')));
});
