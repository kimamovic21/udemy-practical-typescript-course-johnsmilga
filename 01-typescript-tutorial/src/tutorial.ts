class Book {
  private checkedOut: boolean = false;
  constructor(
    public readonly title: string, 
    public author: string,
    private someValue: number
  ) {}
  public getSomeValue() {
    return this.someValue;
  };
};

const deepWork = new Book('Deep Work', 'Cal Newport', 45);
console.log(deepWork);
console.log(deepWork.getSomeValue());