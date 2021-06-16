const delay = ms => {
  //console.log(ms);
  const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(ms);
    }, ms)
  });
  return promise;
};

const logger = time => console.log(`Resolved after ${time}ms`);
console.log("Start of Task 1");
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);


setTimeout(() => {
  console.log("End of Task 1");
}, 2500);