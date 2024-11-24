let nameEle=document.getElementById('name');
let mobileEle=document.getElementById('mobile');
let emailEle=document.getElementById('email');
let passwordEle=document.getElementById('password');
let mainForm=document.getElementById('mainform');



mainForm.addEventListener('submit',function (event) {
	event.preventDefault();
	sessionStorage.setItem("name",nameEle.value);
	sessionStorage.setItem("mobile",mobileEle.value);
	sessionStorage.setItem("email",emailEle.value);
	sessionStorage.setItem("password",passwordEle.value);

	let user={
	name:sessionStorage.getItem("name"),
	mobile:sessionStorage.getItem("mobile"),
	email:sessionStorage.getItem("email"),
	password:sessionStorage.getItem("password")

}

	if(user.name!=""&&user.mobile!=""&&user.email!=""&&user.password!=""){
		let usersList=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
	usersList.push(user);
	localStorage.setItem('users',JSON.stringify(usersList));
	}
 
})
// let listUsers=JSON.parse(localStorage.getItem('users'));





