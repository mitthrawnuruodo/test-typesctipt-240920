const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;
const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;

addTaskBtn.addEventListener('click', function() {
  if (taskInput.value.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});