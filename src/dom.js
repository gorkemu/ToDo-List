import {
  isToday, isTomorrow, format, parseISO,
} from 'date-fns';
import {
  getProjects, getSelectedProjectId, getTodos, save,
} from './projects';

const projectsContainer = document.querySelector('#projects-list');
const todosContainer = document.querySelector('.todos-container');
const projectHeader = document.querySelector('.project-header');
const todosList = document.querySelector('#todos-list');

export function displayTodoForm() {
  document.getElementById('add-todo-form-container').style.display = ''
  const titleField = document.querySelector('#title');
  titleField.focus();
}

export function resetTodoForm() {
  document.getElementById('add-todo-form').reset();
  document.getElementById('add-todo-form-container').style.display = 'none';
}

export function displayProjectForm() {
  document.getElementById('new-project-form-container').style.display = '';
  const inputField = document.querySelector('#project-name-input');
  inputField.focus();
}

export function resetProjectForm() {
  document.getElementById('new-project-form').reset();
  document.getElementById('new-project-form-container').style.display = 'none';
}

export function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function renderProjects() {
  getProjects().forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add('project-name');
    projectElement.textContent = project.name;
    if (project.id === getSelectedProjectId()) {
      projectElement.classList.add('selected-project');
    }

    const deleteProjectButton = document.createElement('i');
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.classList.add('fa-solid');
    deleteProjectButton.classList.add('fa-xmark');
    deleteProjectButton.setAttribute('title', 'Delete Project');

    projectElement.appendChild(deleteProjectButton);
    projectsContainer.appendChild(projectElement);
  });
}

export function renderTodos(selectedProject) {
  getTodos(selectedProject).forEach((todo) => {
    const newTodo = document.createElement('div');
    newTodo.dataset.todoId = todo.id;
    newTodo.classList.add('new-todo');
    todosList.appendChild(newTodo);

    const iconsWrapper = document.createElement('div');
    iconsWrapper.classList.add('icons-wrapper');
    newTodo.appendChild(iconsWrapper);
    
    const todoPriorityIcon = document.createElement("i");
    todoPriorityIcon.classList.add("fa-solid");
    todoPriorityIcon.classList.add("fa-flag");
    todoPriorityIcon.classList.add(todo.priority.toLowerCase());
    todoPriorityIcon.setAttribute('title', `${todo.priority} priority`);  
    iconsWrapper.appendChild(todoPriorityIcon);
  
    const deleteTodoButton = document.createElement('i');
    deleteTodoButton.classList.add('delete-todo-button');
    deleteTodoButton.classList.add('fa-solid');
    deleteTodoButton.classList.add('fa-trash-can');
    deleteTodoButton.setAttribute('title', 'Delete Todo');
    iconsWrapper.appendChild(deleteTodoButton);

    const todoWrapper = document.createElement('div');
    todoWrapper.classList.add('new-todo-wrapper');
    newTodo.appendChild(todoWrapper);

    const todoTitle = document.createElement('p');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;
    todoWrapper.appendChild(todoTitle);

    if (todo.description) {
      const todoDescription = document.createElement('p');
      todoDescription.classList.add('todo-description');
      todoDescription.textContent = todo.description;
      todoWrapper.appendChild(todoDescription);
    }

    if (todo.dueDate) {
      const todoDueDate = document.createElement("p");
      todoDueDate.classList.add("todo-duedate");
      if (isToday(parseISO(todo.dueDate))) {
        todoDueDate.textContent = "Today";
      } else if (isTomorrow(parseISO(todo.dueDate))) {
        todoDueDate.textContent = "Tomorrow";
      } else {
        todoDueDate.textContent = format(parseISO(todo.dueDate), "d MMM");
      }
      todoWrapper.appendChild(todoDueDate);
    }
  });
}

export function render() {
  clearElement(projectsContainer);
  renderProjects();
  const selectedProject = getProjects().find(
    (project) => project.id === getSelectedProjectId(),
  );
  if (!selectedProject) {
    todosContainer.style.display = 'none';
  } else {
    todosContainer.style.display = '';
    projectHeader.textContent = selectedProject.name;
    clearElement(todosList);
    renderTodos(selectedProject);
  }
}

export function saveAndRender() {
  save();
  render();
}


