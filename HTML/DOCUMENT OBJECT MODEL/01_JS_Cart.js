let product={
				id:"P101",
				image:"Images/iwatch.jpeg",
				name:"I-Watch",
				price:40000,
				qty:1

			};

let cartItem=`<tr>
				<td>${product.id}</td>
				<td><img src="${product.image}" width="25%" height="25px"></td>
				<td>${product.name}</td>
				<td>&#8377;${product.price}</td>
				<td><i class="fa fa-minus-circle pr-2" onclick="dec()"></i>
				<span id="dis-qty">${product.qty}</span><i class="fa fa-plus-circle pl-3" onclick="inc()"></i></td>
				<td>&#8377;<span id="t-qty"></span></td>
			</tr>`


let tableBody=document.getElementById("t-body");
tableBody.innerHTML=cartItem;
let spanTag=document.getElementById("dis-qty");
let totalQty=document.getElementById("t-qty");
totalQty.innerText=product.price;

function inc(){
	product.qty++;
	spanTag.innerText=product.qty;
	totalQty.innerText=product.qty*product.price;

}
function dec(){
	if(product.qty>1){
		product.qty--;
		spanTag.innerText=product.qty;
		totalQty.innerText=product.qty*product.price;
	}else{
		product.qty=1;
		spanTag.innerText=product.qty;
		totalQty.innerText=product.qty*product.price;
	}
}