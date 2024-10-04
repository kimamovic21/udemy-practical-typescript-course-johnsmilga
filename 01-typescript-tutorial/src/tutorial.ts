function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
};

let result = pair<number, string>(123, 'Hello');
console.log(result);


function processValue<T extends number | string>(value: T): T {
  console.log(value);
  return value;
};

processValue('hello');
processValue(12);
// processValue(true);