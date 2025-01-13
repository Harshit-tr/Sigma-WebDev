console.log("This is Promise ");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Error from Promise");
  } else {
    setTimeout(() => {
      console.log("This is Promise ");
      resolve("Hello from Promise");
    }, 2000);
  }
});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
      reject("Error from Promise2");
    } else {
      setTimeout(() => {
        console.log("This is Promise 2");
        resolve("Hello from Promise2");
      }, 2000);
    }
  });
let p3 = Promise.allSettled([prom1, prom2])
p3.then((msg) => {
  console.log(msg);
}).catch((err) => {
    console.log(err)
})
