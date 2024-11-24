let increment=document.getElementsById("increment");
let decrement=document.getElementsByClassName("dec");
let incBtn=document.getElementById("inc-btn");
let decBtn=document.getElementById("dec-btn");

let quantity=0;


increment.innerText=quantity;
decrement.innerText=quantity;

incBtn.addEventListener('click',function(){
	quantity++;
	increment.innerText=quantity;
})

dicBtn.addEventListener('click',function(){
	quantity--;
	decrement.innerText=quantity;
})