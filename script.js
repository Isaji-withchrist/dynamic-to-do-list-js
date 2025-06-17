// Run code after DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Step 2: Define function to add tasks
    function addTask() {
      // Get and trim the input value
      const taskText = taskInput.value.trim();
  
      // Check for empty input
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      // Create list item (li)
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
  
      // Assign click handler to remove button
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
      };
  
      // Append remove button to list item and list item to list
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      // Clear the input field
      taskInput.value = "";
    }
  
    // Step 3: Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Step 4: Allow pressing Enter key to add task
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Step 5: Optional — auto-run addTask on load (empty by default, safe)
    addTask(); // This does nothing visible unless taskInput has a preset value
  });
  