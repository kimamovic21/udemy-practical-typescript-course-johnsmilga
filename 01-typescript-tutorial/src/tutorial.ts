type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const person: Person = {
  name: 'anna',
  // study: () => console.log('Studying'),
  login: () => console.log('Logging in'),
};

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