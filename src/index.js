import { displayProjectForm, displayTaskForm, resetProjectForm, resetTodoForm } from './dom';
import { createProject, renderProjects } from './projects';
import { addTodo } from './todos';

const eventListeners = (() => {

    const createProjectButton = document.querySelector(".create-project-button");
    createProjectButton.addEventListener("click", displayProjectForm);

    const cancelProjectButton = document.querySelector(".cancel-project-button");
    cancelProjectButton.addEventListener("click", resetProjectForm);

    const createProjectForm = document.querySelector('#new-project-form');
    createProjectForm.addEventListener('submit', e => {
        e.preventDefault();
        createProject();
    });

    const createTodoButton = document.querySelector(".create-todo-button");
    createTodoButton.addEventListener("click", displayTaskForm);

    const cancelTodoButton = document.querySelector(".cancel-todo-button");
    cancelTodoButton.addEventListener("click", resetTodoForm);

    const addTodoForm = document.querySelector("#add-todo-form");
    addTodoForm.addEventListener("submit", e => {
        e.preventDefault();
        addTodo();
    });

    const deleteTodoButton = document.querySelectorAll(".delete-todo-button");
    
    const editTodoButton = document.querySelectorAll(".edit-todo-button");
})();

// renderProjects();