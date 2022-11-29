import { getProjects, getSelectedProjectId, getTodos, save } from "./projects";

const projectsContainer = document.querySelector('#projects-list');
const todosContainer = document.querySelector('.todos-container');
const projectHeader = document.querySelector('.project-header');
const todosList = document.querySelector('#todos-list');

export function displayTodoForm() {
    document.getElementById("add-todo-form-container").style.display = '';
}

export function resetTodoForm() {
    document.getElementById("add-todo-form").reset();
    document.getElementById("add-todo-form-container").style.display = 'none';
}

export function displayProjectForm() {
    document.getElementById("new-project-form-container").style.display = '';
}

export function resetProjectForm() {
    document.getElementById("new-project-form").reset();
    document.getElementById("new-project-form-container").style.display = 'none';
}

export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function renderProjects() {
    getProjects().forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add("project-name");
        projectElement.textContent = project.name;
        if (project.id === getSelectedProjectId()) {
            projectElement.classList.add("selected-project")
        }

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add("delete-project-button");
        deleteProjectButton.textContent = "X";

        projectElement.appendChild(deleteProjectButton);
        projectsContainer.appendChild(projectElement);

    });
}

export function render() {
    clearElement(projectsContainer);
    renderProjects();
    const selectedProject = getProjects().find(project => project.id === getSelectedProjectId());
    if (!selectedProject) {
        todosContainer.style.display = 'none';
    } else {
        todosContainer.style.display = '';
        projectHeader.textContent = selectedProject.name;
        clearElement(todosList);
        renderTodos(selectedProject);
    }
};

export function saveAndRender() {
    save();
    render();   
}

export function renderTodos(selectedProject) {
    getTodos(selectedProject).forEach(todo => {
        const newTodo = document.createElement("div");
        newTodo.dataset.todoId = todo.id;
        newTodo.classList.add("new-todo");
        todosList.appendChild(newTodo);

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
        
        const deleteTodoButton = document.createElement('button');
        deleteTodoButton.classList.add("delete-todo-button");
        deleteTodoButton.textContent = "Mark As Complete / Delete";
        newTodo.appendChild(deleteTodoButton);
    });
};