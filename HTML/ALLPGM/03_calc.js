
let valueA=document.getElementById('a');
let valueB=document.getElementById('b');
let add=document.getElementById('add');
let sub=document.getElementById('sub');
let mul=document.getElementById('mul');
let div=document.getElementById('div');
let totalValue=document.getElementById('total')


	add.addEventListener('click',function(all){
	all.preventDefault();
	let input1=valueA.value;
	let input2=valueB.value;
	let totalvalue=Number(input1)+Number(input2);

	let Total=`${input1}+${input2}=${totalvalue}`;
	totalValue.innerText=Total;
});

	sub.addEventListener('click',function(all){
	all.preventDefault();
	let input1=valueA.value;
	let input2=valueB.value;
	let totalvalue=Number(input1)-Number(input2);

	let Total=`${input1}-${input2}=${totalvalue}`;
	totalValue.innerText=Total;
});
	mul.addEventListener('click',function(all){
	all.preventDefault();
	let input1=valueA.value;
	let input2=valueB.value;
	let totalvalue=Number(input1)*Number(input2);

	let Total=`${input1}X${input2}=${totalvalue}`;
	totalValue.innerText=Total;
});
	div.addEventListener('click',function(all){
	all.preventDefault();
	let input1=valueA.value;
	let input2=valueB.value;
	let totalvalue=Number(input1)/Number(input2);

	let Total=`${input1}/${input2}=${totalvalue}`;
	totalValue.innerText=Total;
});
