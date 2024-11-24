let product={
					id:"K101",
					brand:"Kingfisher",
					price:200,
					qty:1
			};

let pushItem=`<h4>Id:<span id="p-id" class="text-primary">${product.id}</span></h4>
				<h4>Brand:<span id="p-brand" class="text-primary">${product.brand}</span></h4>
				<h4>Price:<span id="p-price" class="text-primary">${product.price}</span></h4>
				<h4><i class="fa fa-minus-circle" id="dec"></i><span class="pl-2 pr-2" id="display">${product.qty}</span><i class="fa fa-plus-circle" id="inc"></i></h4>
				<h4>TotalPrice:<span id="t-price" class="text-primary"></span></h4>
				<h4>Msg:<span id="msg" class="text-primary"></span></h4>`;

let cartBody=document.getElementById("cart-body");
cartBody.innerHTML=pushItem;
let incBtn=document.getElementById("inc");
let disBtn=document.getElementById("display");
let decBtn=document.getElementById("dec");
let tBtn=document.getElementById("t-price");
let msgBtn=document.getElementById("msg");
tBtn.innerText=product.price;
incBtn.addEventListener('click',function()
{
	product.qty++;
	disBtn.innerText=product.qty;
	tBtn.innerText=product.qty*product.price;

});

decBtn.addEventListener('click',function()
{
	if(product.qty>1){
		product.qty--;
		disBtn.innerText=product.qty;
		tBtn.innerText=product.qty*product.price;
	}else{
		tBtn.innerText=product.price;
	}
});
msgBtn.innerText="Low Stack";

