interface StoreData<T = any> {
  data: T[];
};

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};
console.log(storeNumbers);

const randomStuff: StoreData = {
  data: ['random', 1],
};
console.log(randomStuff);