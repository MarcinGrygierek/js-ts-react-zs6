// const i let
let variable = 234234;
variable = "asdfsdfs";

const constant = 100;
// constant = 'sdfsdf';
console.log(variable);

const user = {
  name: "Marcin",
};

user.name = "John doe";

const arr = [1, 2, 34];

arr.push(true, "asdasd", { a: 233 }, () => null);
console.log(user);
console.log(arr);

// funkcje
function foo(arg) {
  return arg * 2;
}

const baz = (arg) => {
  return arg * 2;
};

const bar = (arg) => arg * 2;

console.log(foo(2));
console.log(bar(2));

// obiekty
const user1 = {
  name: "Marcin",
  sayHello: function () {
    console.log("Hello from user1!", this);
  },
};

const user2 = {
  name: "John",
  sayHello: () => {
    console.log("Hello from user2!", this);
  },
};

user1.sayHello();
user2.sayHello();

// metody tablicowe
const m_1 = [1, 2, 3];
const m_2 = [];

for (let i = 0; i < m_1.length; i++) {
  const val = m_1[i];
  m_2.push(val ** 2);
}

console.log(m_2);

const m_3 = m_1.map((val) => val ** 2);
const m_4 = m_1.filter((val) => val % 2);

const sum = m_4.reduce((acc, curr) => acc + curr, 234234234);

console.log(m_3);
console.log(m_4);
console.log(sum);
console.log(!!0);
console.log(!!1);

// interpolacja i łańcuchy szablonowe
const getValue = (arg) => arg * 1 + 1 - arg / 0.5;
const name = "Lorem ipsum " + getValue(23) + " dolor" + "sit amet";
console.log(name);

const name1 = `Lorem ipsum ${getValue(223)} dolor 
sit amet`;

console.log(name1);

//operatory spread oraz rest
const user33 = {
  name: "M",
  lastName: "G",
  age: 33,
  address: {
    city: "Berlin",
  },
};

const userName = user33.name;
const userLastName = user33.lastName;

const {
  name: user33Name,
  lastName,
  address: { city },
} = user33;

console.log(user33Name, lastName, city);

const arr33 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const [firstValue, secondValue, ...restValues] = arr33;
console.log(arr33);
console.log(firstValue, secondValue, restValues);

const doSomethingV1 = (arr) => {
    return Math.max(...arr)
}

const doSomethingV2 = (...arr) => {
    return Math.max(...arr)
}

console.log(doSomethingV1([1, 2, 3]))
console.log(doSomethingV2(1, 2, 3))