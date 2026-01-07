//promises logic in js
//to create promises in js we have to use object syntax
const movie_Rating = new Promise((resolve, reject) => {
  let rating = 3;
  if (rating > 4) {
    resolve("good movie");
  } else {
    reject("waste of our time!");
  }
});
//call promises
//to execute promises
movie_Rating
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
