let likeBtn=document.getElementById('like');
let disBtn=document.getElementById('dislike');
let tLike=document.getElementById('tlike');
let tDis=document.getElementById('tdis');
let likes=0;
tLike.innerText=likes;
likeBtn.addEventListener('click',function(event)
{
	event.preventDefault();
	likes++;
	tLike.innerText=likes;

});
let dislikes=0;
tDis.innerText=dislikes;
disBtn.addEventListener('click',function(event)
{
	event.preventDefault();
	dislikes++;
	tDis.innerText=dislikes;

});

let qtyBtn=document.getElementById('qty');
let incBtn=document.getElementById('q-inc');
let decBtn=document.getElementById('q-dec');


let totalPrice=document.getElementById('t-price');
let price=15000;
totalPrice.innerText=price;
let qty=1;
qtyBtn.innerText=qty;

incBtn.addEventListener('click',function(event)
{
	event.preventDefault();
	qty++;
	qtyBtn.innerText=qty;
	totalPrice.innerText=price*qty;

})

decBtn.addEventListener('click',function(event)
{
	event.preventDefault();
	if(qty>1)
	{
		qty--;
		qtyBtn.innerText=qty;
		totalPrice.innerText=price*qty;
	}

});
