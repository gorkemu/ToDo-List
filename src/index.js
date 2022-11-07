import { cancelAddingTodo, displayForm } from './dom';
import { addTodo } from './todo';

const eventListeners = (function() {

    const addTodoButton = document.querySelector(".add-todo-button");
    addTodoButton.addEventListener("click", displayForm);

    const cancelButton = document.querySelector(".cancel-button");
    cancelButton.addEventListener("click", cancelAddingTodo);

    const addButton = document.querySelector(".add-button");
    addButton.addEventListener("click", addTodo);

    const deleteTodoButton = document.querySelectorAll(".delete-todo-button");
    
    const editTodoButton = document.querySelectorAll(".edit-todo-button");
})();