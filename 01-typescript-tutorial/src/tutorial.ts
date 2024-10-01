function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
};

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com',
};

createStudent(newStudent);
createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' });