// ## Conditional Statements #7

// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

const person1 = {
  name: 'Jack',
  age: 19,
  status: 'tourist',
};

const person2 = {
  name: 'matt',
  age: 30,
  status: 'residet',
};

if (person1.age >= 18 && person1.status === 'resident') {
  console.log('you can vote');
} else {
  console.log('you can not vote');
}
