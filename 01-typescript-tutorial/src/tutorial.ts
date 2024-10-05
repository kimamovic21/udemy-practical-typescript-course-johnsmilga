class Book {
  readonly title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  };
};

const deepWork = new Book('deep work ', 'cal newport');
deepWork.checkedOut = true;
// deepWork.checkedOut = 'something else';
deepWork.title = 'something else';
console.log(deepWork);