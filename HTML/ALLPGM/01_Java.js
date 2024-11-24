let employees=[{'id':101,'first_name':'Rama','last_name':'Mohan','email':'rama@123','gender':'Male','active':'Yes'},
				{'id':102,'first_name':'Nara','last_name':'Ro','email':'Naraa@123','gender':'Male','active':'Yes'},
				{'id':103,'first_name':'Kara','last_name':'Bundhi','email':'Karaa@123','gender':'Male','active':'Yes'},
				{'id':104,'first_name':'Ravana','last_name':'Reddy','email':'Ravana@123','gender':'Female','active':'Yes'},
				{'id':105,'first_name':'Lori','last_name':'Kori','email':'Lori@123','gender':'Male','active':'Yes'},
				{'id':106,'first_name':'Bouri','last_name':'Juni','email':'Bouri@123','gender':'Male','active':'Yes'},
				{'id':107,'first_name':'gouri','last_name':'Loori','email':'gouria@123','gender':'Female','active':'Yes'},
				{'id':108,'first_name':'Khali','last_name':'Pandaga','email':'khalia@123','gender':'Male','active':'Yes'},
				{'id':109,'first_name':'Mummy','last_name':'Enjoy','email':'mummya@123','gender':'Female','active':'Yes'},
				{'id':110,'first_name':'Kondi','last_name':'Came','email':'kondia@123','gender':'Male','active':'Yes'},
				{'id':111,'first_name':'Kiran','last_name':'Ok','email':'kirana@123','gender':'Female','active':'Yes'}];
				

let allEmpsBtn=document.getElementById('all-emps-btn');
let maleEmpsBtn=document.getElementById('male-emps-btn');
let femaleEmpsBtn=document.getElementById('female-emps-btn');


function displayEmps(emps)
{
	let length=emps.length;
	let str='';
	if(length!=0)
	{
		for(let emp of emps)
		{
			str=str+`<tr>
						<td>${emp.id}</td>
						<td>${emp.first_name}</td>
						<td>${emp.last_name}</td>
						<td>${emp.email}</td>
						<td>${emp.gender}</td>
						<td>${emp.active}</td>
					</tr>`
		}
	}
	let tBody=document.getElementById('emps-data');
	tBody.innerHTML=str;
};

allEmpsBtn.addEventListener('click',()=>{
	displayEmps(employees)
})

let maleEmps=employees.filter((emp)=>{
	if(emp.gender==='Male')
	{
		return emp;
	}
});

maleEmpsBtn.addEventListener('click',()=>{
	displayEmps(maleEmps);
});


let femaleEmps=employees.filter((emp)=>{
	if(emp.gender==='Female')
	{
		return emp;
	}
});

femaleEmpsBtn.addEventListener('click',()=>{
	displayEmps(femaleEmps);
});


//Search Box

let empName=document.getElementById('emp-name');
empName.addEventListener('keyup',()=>{
	let enteredValue=empName.value;
	let enames=searchEmpsData(enteredValue,employees);
	displayEmps(enames);
});

function searchEmpsData(val,emps)
{
	val=val.toUpperCase().trim();
	let filteredEmps=[];
	for(let emp of emps)
		{
			oName=emp.first_name.toUpperCase().trim();
			if(oName.includes(val))
			{
				filteredEmps.push(emp);
			}
		} 
		return filteredEmps;
}

















