const users = [
  { name: "John", age: 12 },
  { name: "Jane", age: 132 },
  { name: "Joe", age: 18 },
  { name: "Jacob", age: 22 },
];


const adults = users.filter(user => user.age >= 18);

const nameAges = users.map(user => `${user.name} - ${user.age}`);

console.log(adults);
console.log(nameAges);

const adults2 = users
    .filter(user => user.age >= 18)
    .map(user => `${user.name} - ${user.age}`)
    .join(', ');

console.log(adults2);