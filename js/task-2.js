const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false }
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user => 
//     user.name === userName ? {...user, active: !user.active } : user,
//     );

//     callback(updatedUsers);
// };

//toggleUserState(users, 'Mango', logger);
//toggleUserState(users, 'Lux', logger);

const toggleUserState = (allUsers, userName) => { 
    const promise = new Promise ((resolve) => {
        resolve(allUsers.map(user => 
          user.name === userName ? {...user, active: !user.active } : user,
          ));
        });
        return promise;
      }  
  const loggers = updatedUsers => console.table(updatedUsers);


  
  setTimeout(() => {
    console.log("Start of task 2");
    toggleUserState(users, 'Mango').then(loggers);
    toggleUserState(users, 'Lux').then(loggers);
  }, 3000);
  
setTimeout(() => {
  console.log("End of task 2");
}, 3500);
