function infiniteTimerGame(callback) {
  console.log('Ready...go!');

  setTimeout(() => {
    console.log('Time up! 10 seconds before the next game starts...');

    // eslint-disable-next-line
    callback && callback();

    setTimeout(() => {
      infiniteTimerGame(callback);
    }, 10000);
  }, 1000);
}

module.exports = infiniteTimerGame;
