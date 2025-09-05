// promises

// let p = new Promise((resolve, reject) => {
//     console.log("Hello promise");
//     // resolve(123);
//     reject("some error occured")
// })

// how to use promise?? => Agar toh promise pending hai toh hum kush nhi kr skte but agragr fulfilled ya rejecet hai toh use kr skte hai using .then() and .catch() respectively

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Hello");
//         resolve("Success")
//         reject("error")
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled",res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);

// });

// promise chaining

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success")
//         }, 4000);
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success")
//         }, 4000);
//     })
// }

// console.log("Fetching data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);

// });

// console.log("Fetching data2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });                              // is case mein donon data ek sath hi aajayenge but humko pahle data 1 complete chaiye and then data 2 chaiye , toh isliye chaining use krte hai

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("Fetching data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);

//     console.log("Fetching data2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// });
// yeh dikhne mein thoda ajib lag skta hai toh hum aise b kr skte hai

// console.log("Fetching data1");
// asyncFunc()
//   .then((res) => {
//     console.log(res);

//     console.log("Fetching data2");
//     return asyncFunc2();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// --------------------------------------------------------------------------------------------------------------
// promis chaining are also difficult to understand so now we use async await
// async function automatically and compulsarily promise return krta hai

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('weather data');
            resolve(200)
        }, 2000);
    })
}
async function getWeatherData() {
    await api();  //1st call
    await api();  //2nd call
}

// lets do promisechaining wala fn using async await

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}

// async function getData() {
//     await asyncFunc();
//     await asyncFunc2();
// }

// getData()

// acha ab ismein b ek problem hai ki humko unnecessarily ek bar aur async function ko call krna padta hai, iska b ek solution hai IIFE's

// IIFE : Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.
// syntax : (function(){...})(); or (() => {...})(); or (async function(){...})();

(async function () {
    await asyncFunc();
    await asyncFunc2();
})();