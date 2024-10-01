type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};

const susan: User = {
  id: 2,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
};

createUser(john);
createUser(susan);


type StringOrNumber = string | number; 

let value: StringOrNumber;
value = 'hello'; 
value = 123; 
console.log(value);

type Theme = 'light' | 'dark'; 

let theme: Theme;
theme = 'light';
theme = 'dark'; 
console.log(theme);

function setTheme(t: Theme) {
  theme = t;
};

setTheme('dark'); 