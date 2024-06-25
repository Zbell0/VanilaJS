// ## Objects #6

// 1. create car object
// 2. add make, model, year, colors (array),
//    hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

const car = {
  make: 'Hyndai',
  model: 'Avantte',
  year: 1998,
  colors: ['red', 'yellow', 'blue'],
  hybrid: true,
  drive() {
    console.log('dirve');
  },
  stop() {
    console.log('stop the car');
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.driven();
car.stop();
