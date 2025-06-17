// Run the code after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Step 2: Load tasks from Local Storage
    loadTasks();
  
    // Step 3: Add event listeners
    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      } else {
        alert("Please enter a task.");
      }
    });
  
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
          addTask(taskText);
          taskInput.value = "";
        } else {
          alert("Please enter a task.");
        }
      }
    });
     // Allow Enter key to add tasks
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      } else {
        alert("Please enter a task.");
      }
    }
  });
  
    // Step 4: Function to add task to DOM and optionally save to Local Storage
    function addTask(taskText, save = true) {
      // Create list item
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
  
      // Remove handler
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
        removeTaskFromStorage(taskText);
      };
  
      // Append to list
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);

      

      // Assign remove functionality
    removeButton.onclick = function () {
        taskList.removeChild(listItem);
        removeTaskFromStorage(taskText);
      };
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // Save to Local Storage
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  
    // Step 5: Load tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }
  
    // Step 6: Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  });
  