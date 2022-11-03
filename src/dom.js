export function displayForm() {
    document.getElementById("add-task-form-container").style.display = '';
}

export function cancelTask() {
    document.getElementById("add-task-form").reset();
    document.getElementById("add-task-form-container").style.display = 'none';
}

export function addTaskToDom(title, description, dueDate, priority) {
    const todoList = document.querySelector(".todo");
    const newTodo = document.createElement("div");
    newTodo.classList.add("new-todo");
    todoList.appendChild(newTodo);

    const taskTitle = document.createElement("div");
    taskTitle.textContent = title;
    newTodo.appendChild(taskTitle);

    const taskDescription = document.createElement("div");
    taskDescription.textContent = description;
    newTodo.appendChild(taskDescription);

    const taskDueDate = document.createElement("div");
    taskDueDate.textContent = dueDate;
    newTodo.appendChild(taskDueDate);

    const taskPriority = document.createElement("div");
    taskPriority.textContent = priority;
    newTodo.appendChild(taskPriority);

    const editTaskButton = document.createElement("button");
    editTaskButton.textContent = "Edit";
    editTaskButton.classList.add("edit-task-button");
    newTodo.appendChild(editTaskButton);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = "Delete";
    deleteTaskButton.classList.add("delete-task-button");
    newTodo.appendChild(deleteTaskButton);

}
