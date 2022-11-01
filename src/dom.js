export function displayForm() {
    document.getElementById("add-task-form-container").style.display = '';    
}

export function cancelTask() {
    document.getElementById("add-task-form").reset();
    document.getElementById("add-task-form-container").style.display = 'none';
}

