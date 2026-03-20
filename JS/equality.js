const c1 = 100;
const c2 = '100';
const c3 = c2;
console.log(c1 === c2)
console.log(c1 === c3)
console.log(c1 == c2)
console.log(c1 == c3)

const valueFromServer = '10000';

// niepoprawne
console.log(valueFromServer == 10000)

//poprawnie - normalizajca
const normalizeCode = (value) => {
    if(typeof value === 'string') return Number(value);
    return value;
}

console.log(normalizeCode(valueFromServer) === 10000)

// równość obiektów i tablic
const a1 = [1, 2, 3];
const a2 = [1, 2, 3];
const a3 = a2;

console.log(a1, a2, a3);
console.log(a1 === a2);
console.log(a2 === a3);
a1.push(4),
a2.push(4);
console.log(a1, a2, a3);

// błąd - mutacja
function modify(arr) {
    const rand = Math.round(Math.random() * 100);
    arr.push(rand);
    return arr;
}

// poprawione - brak mutacji, stworzenie nowej tablicy
function modifyCorrect(arr) {
    const rand = Math.round(Math.random() * 100);

    return [...arr, rand];
}

const arr1 = [1, 2, 3];
const arr2 = modifyCorrect(arr1);
console.log(arr1, arr2);

const u1 = { a: 2 }
const u2 = { a: 2 }
const u3 = u2;

console.log(u1 === u2);
console.log(u3 === u2);