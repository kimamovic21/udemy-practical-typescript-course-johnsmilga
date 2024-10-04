function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
};

console.log(generateStringArray(3, 'hello'));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
};

let arrayStrings = createArray<string>(3, 'hello');
let arrayNumbers = createArray<number>(4, 100);

console.log(arrayStrings);
console.log(arrayNumbers);