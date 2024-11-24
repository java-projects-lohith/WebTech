//event why because when ever event is triggering that time one object is going to create internally for tha event to access that object we are giving event we can give any name there means in the place of event//
let taskFormEl=document.getElementById('task-form');
taskFormEl.addEventListener('submit',function(event)
{
	event.preventDefault();
	let inputEl=document.getElementById("input-el");
	let task=inputEl.value;
	list();
	displayTasks();
	
	
})
let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
function displayTasks(){
	let inputEl=document.getElementById("input-el");
	let task=inputEl.value;
	taskList.unshift(task);
	localStorage.setItem('tasks',JSON.stringify(taskList));
}

//DisplayIn List Format
function list(){
	let taskDis=document.getElementById('task-list-el');
	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

	let eachTask=``;
	for(let task of taskList){
		eachTask+=`<li class="list-group-item list-group-item-dark">
					<span>${task}</span>
					<button class="float-right">
						<i class="fa fa-times-circle"></i>
					</button>
				</li>`
	}
	taskDis.innerHTML=eachTask;
}
list();