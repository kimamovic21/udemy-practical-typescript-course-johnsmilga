import newStudent, { sayHello, person, type Student } from './actions';
import { someValue } from './example';

sayHello('TypeScript');
console.log(person);
console.log(newStudent);
console.log(someValue);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};

console.log(anotherStudent);