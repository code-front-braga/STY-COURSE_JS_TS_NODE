const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve('Promise 1');
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve('Promise 2');
  }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject('Promise 3');
  }, 1000);
});

Promise.allSettled([promise1, promise2, promise3]).then(resAllSettled => {
  resAllSettled.forEach(item => {
    if (item.status === 'fulfilled') {
      console.log(item.value);
    } else if (item.status === 'rejected') {
      console.log(item.reason);
    }
  });
});
