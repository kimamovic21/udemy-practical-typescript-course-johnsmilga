function genericFunction<T>(arg: T): T {
  return arg;
};

const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(2);

console.log(someStringValue);
console.log(someNumberValue);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
};

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
};
console.log(genericString);

async function someFunc(): Promise<string> {
  return 'Hello World';
};

const result = someFunc();
console.log(result);