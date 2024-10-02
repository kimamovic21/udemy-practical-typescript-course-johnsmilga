let person: [string, number] = ['john', 25];
console.log(person[0]); 
console.log(person[1]); 

let date: readonly [number, number, number] = [10, 2, 2024];
// date.push(2025);
console.log(date);

function getPerson(): [string, number] {
  return ['john', 25];
};

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

// let susan: [string, number] = ['susan', 25];
// susan[0] = 'bob';
// susan.push('some random value');
// console.log(susan);

let susan: readonly [string, number] = ['susan', 25];
// susan[0] = 'bob';
// susan.push('some random value');
console.log(susan);