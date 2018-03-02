const _ = require("lodash");

const meeteek = input => {
  // Your future job begins here ...
  _.reduce(input, (acc, people) => {
    _.includes(input, people.sex)
    _.intersection(input, people.interests) 
    return 
  }, {})
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
