interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
   // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
};

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // second option
  // printSomething: (someValue) => {
  //   console.log(deepWork.author);
  //   return someValue;
  // },
  // third option
  printSomething(someValue) {
    return someValue;
  },
  // alternative
  printAuthor: () => {
    console.log(deepWork.author);
  },
};

console.log(deepWork);
deepWork.printAuthor();
const result = deepWork.printTitle('is an awesome book');
console.log(result);

console.log(deepWork.printSomething(34));
deepWork.printAuthor();