export function displayForm() {
    document.getElementById("add-todo-form-container").style.display = '';
}

export function cancelAddingTodo() {
    document.getElementById("add-todo-form").reset();
    document.getElementById("add-todo-form-container").style.display = 'none';
}

export function addTodoToDom(title, description, dueDate, priority) {
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

    const editTodoButton = document.createElement("button");
    editTodoButton.textContent = "Edit";
    editTodoButton.classList.add("edit-todo-button");
    newTodo.appendChild(editTodoButton);

    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.textContent = "Delete";
    deleteTodoButton.classList.add("delete-todo-button");
    newTodo.appendChild(deleteTodoButton);

}
