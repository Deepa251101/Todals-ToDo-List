function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    const span = document.createElement("span");
    span.textContent = taskInput.value;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    li.appendChild(span);
    li.appendChild(checkbox);
    taskList.appendChild(li);

    taskInput.value = "";
}