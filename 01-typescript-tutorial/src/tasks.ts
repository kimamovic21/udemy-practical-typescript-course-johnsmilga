const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

function createTask(event: SubmitEvent) {
    event.preventDefault();
    const taskDescription = formInput?.value;
    if (taskDescription) {
      console.log(taskDescription);
      formInput.value = '';
      return;
    };
    alert('Please enter a task description');
};

taskForm?.addEventListener('submit', createTask);