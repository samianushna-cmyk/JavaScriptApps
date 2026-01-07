//string
//multi line strings(backtick)
let info = `vignan lara is one of the colledge. 
it is one colledge in vadlamudi.
it is affilated under jntu`;
console.log(info);
//string interpretation
let firstname = "Anushna";
let surname = "Sami";
console.log(`${firstname} ${surname}`);
//array destructing
let pnames = ["redme", "oneplus", "lg"];
let [brand1, brand2, brand3] = pnames;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movieinfo = {
  moviename: "bahubali",
  director: "rajamouli",
  producer: "shobu",
};
let { moviename, director, producer } = movieinfo;
console.log(moviename);
console.log(director);
console.log(producer);
let moviedeatils = {
  budget: [
    { id: 1001, cost: 10000 },
    { id: 1002, cost: 20000 },
  ],
  release: [
    { id: 1001, day: "thursdsy" },
    {
      id: 2002,
      day: "mondsy",
    },
  ],
};
