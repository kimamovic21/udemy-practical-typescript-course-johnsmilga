let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';
console.log(car);

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
console.log(car1);

// let car2: { brand: string; year: number } = { brand: 'audi' };
// console.log(car2);

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = 'new book';
console.log(items);