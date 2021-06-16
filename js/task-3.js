const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };


const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        resolve({id: transaction.id, time: delay });
      } else {
        reject({id: transaction.id});
      }
    }, delay);
  });
  return promise;
};

const logSuccess = ({id, time}) => {
  setTimeout(() => {
    console.log(`Transaction ${id} processed in ${time}ms`);
    
  }, 4000); 
};

const logError = ({id}) => {
  setTimeout(() => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
}, 4000);
};

setTimeout(() => {
  console.log("Start of task 3");
}, 3800);


setTimeout(() => {
  console.log("End of task 3");
}, 5000);
/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);