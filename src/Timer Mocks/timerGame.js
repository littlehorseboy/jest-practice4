const timerGame = (callback) => {
  console.log('Ready...go!');

  setTimeout(() => {
    console.log('Times up -- stop!');
    if (callback) {
      callback();
    }
    // callback && callback();
  }, 1000);
};

module.exports = timerGame;
