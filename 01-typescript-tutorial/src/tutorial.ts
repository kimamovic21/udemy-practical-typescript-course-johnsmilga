type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

const person = randomPerson();
console.log(person);

function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
};

if (isStudent(person)) {
  console.log(`${person.name} is a Student.`);
  person.study();
} else {
  console.log(`${person.name} is a User.`);
  person.login();
};