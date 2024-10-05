class Book {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  };
  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  };
  public isCheckedOut() {
    return this.checkedOut;
  };
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  };
};

const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork);
deepWork.checkOut();
console.log(deepWork.isCheckedOut());
// deepWork.toggleCheckedOutStatus(); 