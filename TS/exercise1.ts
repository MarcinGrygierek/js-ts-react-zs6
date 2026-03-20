type Ex1User = {
  name: string;
  age: number;
};

const t_users: Ex1User[] = [
  { name: "John", age: 12 },
  { name: "Jane", age: 132 },
  { name: "Joe", age: 18 },
  { name: "Jacob", age: 22 },
];

const t_adults = t_users.filter((user) => user.age >= 18);

const t_nameAges = t_users.map((user) => `${user.name} - ${user.age}`);

console.log(t_adults);
console.log(t_nameAges);

const t_adults2 = t_users
  .filter((user) => user.age >= 18)
  .map((user) => `${user.name} - ${user.age}`)
  .join(", ");

console.log(t_adults2);

const isAdult = (person: Ex1User) => {
  return person.age >= 18;
};
