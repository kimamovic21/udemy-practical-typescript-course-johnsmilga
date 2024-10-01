function addThree(number: number) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
};

const result = addThree(2);
console.log(result);

const someValue = result;
console.log(someValue);

// run time error
// someValue.myMethod();