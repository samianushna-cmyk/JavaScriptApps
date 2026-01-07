//Async,Await logic
const movierating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("good movie");
    } else {
      resolve("waste of time");
    }
  });
};
//how to call movie with async and await
const movieResult = async () => {
  try {
    const result = await movierating();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

movieResult();
