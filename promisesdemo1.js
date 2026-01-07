const bubbleGame = new Promise((resolve, reject) => {
  let random_number = Math.floor(Math.random() * 10) + 1;
  console.log(random_number);
  if (random_number >= 5) {
    resolve("highest number ");
  } else {
    reject("the number is not less than 10");
  }
});
//call back functions
bubbleGame
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
