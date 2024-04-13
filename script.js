class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(taskName) {
    const task = {
      id: Date.now(),
      name: taskName,
    };
    this.tasks.push(task);
    this.renderTasks();
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.renderTasks();
  }

  updateTask(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.name = prompt("Enter the new task name:", task.name);
      task.name = task.name.trim();
      this.renderTasks();
    }
  }

  renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    this.tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
                  <span>${task.name}</span>
                  <button class="update-btn" data-id="${task.id}">Update</button>
                  <button class="delete-btn" data-id="${task.id}">Delete</button>                
              `;
      taskList.appendChild(li);
    });

    this.attachDeleteListeners();
    this.attachedUpdateListeners();
  }

  attachDeleteListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const taskId = parseInt(button.getAttribute("data-id"));
        this.deleteTask(taskId);
      });
    });
  }
  attachedUpdateListeners() {
    const updateButtons = document.querySelectorAll(".update-btn");
    updateButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const taskId = parseInt(button.getAttribute("data-id"));
        this.updateTask(taskId);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const taskManager = new TaskManager();

  const taskForm = document.getElementById("taskForm");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();

    if (taskName !== "") {
      taskManager.addTask(taskName);
      taskInput.value = "";
    }
  });
});
