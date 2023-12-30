document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const clearTasksBtn = document.getElementById("clearTasksBtn");

  // Load tasks from storage and display them
  chrome.storage.sync.get("tasks", function (data) {
    if (data.tasks) {
      data.tasks.forEach((task) =>
        addTask(task.text, task.timestamp, task.done)
      );
    }
  });

  // Add new task
  addTaskBtn.addEventListener("click", function () {
    const text = taskInput.value.trim();
    if (text !== "") {
      const timestamp = new Date().toISOString();
      addTask(text, timestamp, false);
      taskInput.value = "";

      // Save tasks to storage
      chrome.storage.sync.get("tasks", function (data) {
        const tasks = data.tasks || [];
        tasks.push({ text, timestamp, done: false });
        chrome.storage.sync.set({ tasks });
      });
    }
  });

  // Clear all tasks
  clearTasksBtn.addEventListener("click", function () {
    taskList.innerHTML = "";

    // Clear tasks from storage
    chrome.storage.sync.set({ tasks: [] });
  });

  // Add task to the list
  function addTask(text, timestamp, done) {
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" ${done ? "checked" : ""}> 
        ${text} - ${formatDate(timestamp)}
        <button class="deleteBtn">Delete</button>
      `;

    if (done) {
      li.classList.add("done");
    }

    // Mark task as done
    li.querySelector("input").addEventListener("change", function () {
      const isChecked = this.checked;

      // Update task status in storage
      chrome.storage.sync.get("tasks", function (data) {
        const tasks = data.tasks || [];
        const updatedTasks = tasks.map((task) => {
          if (task.text === text && task.timestamp === timestamp) {
            task.done = isChecked;
          }
          return task;
        });

        chrome.storage.sync.set({ tasks: updatedTasks });
      });

      // Update task styling
      li.classList.toggle("done", isChecked);
    });

    // Delete task
    li.querySelector(".deleteBtn").addEventListener("click", function () {
      // Remove task from the DOM
      taskList.removeChild(li);

      // Remove task from storage
      chrome.storage.sync.get("tasks", function (data) {
        const tasks = data.tasks || [];
        const updatedTasks = tasks.filter(
          (task) => !(task.text === text && task.timestamp === timestamp)
        );

        chrome.storage.sync.set({ tasks: updatedTasks });
      });
    });

    taskList.appendChild(li);
  }

  // Format timestamp to a readable format
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
});
