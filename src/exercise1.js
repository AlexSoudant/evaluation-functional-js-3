const moment = require("moment");

const sortProduct = input => {
  // Your future job begins here ...
  let filtered_input = input.filter(product => 
  moment(product.dateAdded).isAfter('2000', 'year')
  )
  .map(product => product = {name: product.name, year: parseInt(moment(product.dateAdded).format('YYYY')), monthOfYear: parseInt(moment(product.dateAdded).format('M')), quantity: product.quantity
  })
  .reduce( (acc, product) => {

    acc[product.name].push(product)

    // acc[product.name] = product
    return acc
  }, {})

  console.log("filtered_input", filtered_input)
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};

// const input = [
//   {
//     name: "tomato",
//     dateAdded: 1486671098000, // 2017-02-09
//     quantity: 3
//   },
//   {
//     name: "banana",
//     dateAdded: 341871098000, // 1980-10-31
//     quantity: 2
//   }
// ];

// const output = {
//   tomato: [{ name: "tomato", year: 2017, monthOfYear: 2, quantity: 3 }]
// };

// [{ name: 'tomato', year: 2017, monthOfYear: 2, quantity: 3 }]

// { tomato: { name: 'tomato', year: 2017, monthOfYear: 2, quantity: 3 } }