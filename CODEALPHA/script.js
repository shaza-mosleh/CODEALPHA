
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add a task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="completeTask(this)"> ${taskText} <button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Mark a task as completed
function completeTask(checkbox) {
    const task = checkbox.parentNode;
    if (checkbox.checked) {
        task.style.textDecoration = "line-through";
    } else {
        task.style.textDecoration = "none";
    }
}

// Delete a task
function deleteTask(button) {
    const task = button.parentNode;
    taskList.removeChild(task);
}
