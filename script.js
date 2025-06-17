document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from localStorage on page load
    loadTasks();
  
    // Add event listener to the Add Task button
    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      } else {
        alert("Please enter a task.");
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
  
    // Function to create a task item in the list and optionally save it
    function addTask(taskText, save = true) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create Remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
  
      // Assign remove functionality
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
        removeTaskFromStorage(taskText);
      };
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // Save to localStorage
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  
    // Load tasks from localStorage and populate the list
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // false = don’t save again
    }
  
    // Remove task from localStorage
    function removeTaskFromStorage(taskText) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  });
  