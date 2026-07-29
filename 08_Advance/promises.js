// Creating a new Promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// resolve() is connected to then(); reject() is connected to catch()

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

// accessing data from resolve() to the then();
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Vikrant", email: "vikky@example.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// BEST CHAINING EVER
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

// Promises using ASYNC & AWAIT : It takes some time to full fill the promise
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", email: "js@example.com" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

// Using then() and catch() method
fetch("https://api.github.com/users")
  .then((response) => {
    return response.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
