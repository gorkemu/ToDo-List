export function displayTaskForm() {
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