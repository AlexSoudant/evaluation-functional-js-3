const countSequence = (sequence, input) => {
  // Your future job begins here ...
  

   return sequence ? input.split(sequence).length - 1 : 0
};

function curry(countSequence){ 
  return function(sequence) {
    return function(input) {
      return countSequence(sequence, input)
    }
  }
}

const curried_count = curry(countSequence)

module.exports = {
  title: "Exercise 4",
  run: curried_count
};
