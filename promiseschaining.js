//promises chaining in js-To handle multiple promises
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve("Ticket Booked");
  });
};
const popcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Buy popcorn");
  });
};
const coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Get coke");
  });
};
// to call theese promises
ticketBooking()
  .then((result) => {
    return popcorn(result);
  })
  .then((result) => {
    return coke(result);
  })
  .then((result) => {
    console.log(" wanna go to movie" + result);
  })
  .catch((err) => {
    console.log(err);
  });
