//bind method
const movieInfo = {
  characterDetails: function () {
    return this.heroName + " " + this.villanName;
  },
};
const pushpa = {
  heroName: "AlluArjun",
  villanName: "Sunil",
};
let result = movieInfo.characterDetails.bind(pushpa);
console.log(result());
