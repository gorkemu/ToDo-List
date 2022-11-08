import { clearElement, resetTodoForm } from "./dom";

const todo = (title, description, dueDate, priority) => {

    return { title, description, dueDate, priority }
};

let myTodos = [];

export function addTodo() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#duedate').value;
    const priority = document.querySelector('#priority').value;
    const newTodo = todo(title, description, dueDate, priority);
    myTodos.push(newTodo);
    renderTodos();
    resetTodoForm();
  };

// export function deleteTodo() {
// }

// export function editTodo() {
// }

export function renderTodos() {
    const todosContainer = document.querySelector(".todos-list");
    clearElement(todosContainer);
    myTodos.forEach(todo => {
        const newTodo = document.createElement("div");
        newTodo.classList.add("new-todo");
        todosContainer.appendChild(newTodo);

        const todoTitle = document.createElement("p");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = todo.title;
        newTodo.appendChild(todoTitle);

        const todoDescription = document.createElement("p");
        todoDescription.classList.add("todo-description");
        todoDescription.textContent = todo.description;
        newTodo.appendChild(todoDescription);

        const todoDueDate = document.createElement("p");
        todoDueDate.classList.add("todo-duedate");
        todoDueDate.textContent = todo.dueDate;
        newTodo.appendChild(todoDueDate);

        const todoPriority = document.createElement("p");
        todoPriority.classList.add("todo-priority");
        todoPriority.textContent = todo.priority;
        newTodo.appendChild(todoPriority);
    });
};
