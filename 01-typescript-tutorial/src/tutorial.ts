type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

const dog: Dog = {
  type: 'dog',
  name: 'Rover',
  bark: () => console.log('Woof!'),
};

const cat: Cat = {
  type: 'cat',
  name: 'Whiskers',
  meow: () => console.log('Meow!'),
};

function makeSound(animal: Animal) {
  if (animal.type === 'dog') {
    animal.bark();
  } else {
    animal.meow();
  };  
};
makeSound(dog);

function makeSound2(animal: Animal) {
  if ('bark' in animal) {
    animal.bark();
  } else {
    animal.meow();
  };
};
makeSound2(cat);