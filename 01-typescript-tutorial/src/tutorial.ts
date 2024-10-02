interface Person {
  name: string;
};

interface DogOwner extends Person {
  dogName: string;
};

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
};

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'Rex',
    };
  } else {
    return {
      name: 'bob',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    };
  };
};

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

if ('managePeople' in employee) {
  employee.managePeople();
  employee.delegateTasks();
};