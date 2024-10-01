const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];

function isNameInList(name: string): boolean {
  return names.includes(name);
};

let nameToCheck: string = 'Jane';

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
};