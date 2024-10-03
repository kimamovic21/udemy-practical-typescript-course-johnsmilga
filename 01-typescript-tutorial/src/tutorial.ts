let someValue: any = 'This is a string';

let strLength: number = (someValue as string).length;
console.log(strLength);


type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);


enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};

const statusValue = 'pending';

const user: User = { 
  name: 'john', 
  status: statusValue as Status
};
console.log(user);