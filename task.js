const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

const deleteIcon = `<i class="fas fa-trash"></i>` 

addTaskButton.addEventListener("click", () => {
	const task = taskInput.value;
	const priority = priorityInput.value;
	const deadline = deadlineInput.value;
	if (task.trim() === "" || deadline === "") {
		alert("Please select an upcoming date for the deadline.")
		return; // Don't add task if task or deadline is empty
	}

	const selectedDate = new Date(deadline);
	const currentDate = new Date();
    let d = selectedDate.getDate();
    let d1 = currentDate.getDate();
    const remainingDate = d-d1;

	if (selectedDate <= currentDate) {
		alert("Please select an upcoming date for the deadline.");
		return; // Don't add task if deadline is not in the future
	}
	if (remainingDate<1){
		document.getElementById("upcoming-event"); 
	}
	 
	


	const taskItem = document.createElement("div");
	taskItem.classList.add("task");
	taskItem.innerHTML = `
	<p>${task}</p>
	
	
	<p>Priority: ${priority}</p>
	<p>Deadline: ${deadline}</p>
    <p>RemainingDate: ${remainingDate}</p>
	<button class="mark-done">Mark Done</button>
	<button class="delete">Delete</button>
`;

	taskList.appendChild(taskItem);

	taskInput.value = "";
	priorityInput.value = "top";
	deadlineInput.value = "";
});

taskList.addEventListener("click", (event) => {
	if (event.target.classList.contains("mark-done")) {
		const taskItem = event.target.parentElement;
		taskItem.style.backgroundColor = "red";
        
		event.target.disabled = true;
	}
});
taskList.addEventListener("click", (event) => {
	if (event.target.classList.contains("delete")) {
		
        taskList.remove(taskItem);

		taskInput.value = "";
		priorityInput.value = "top";
		deadlineInput.value = "";
	}
});
