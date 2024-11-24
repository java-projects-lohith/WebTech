let likesDisplay=document.getElementById("likes");
let dislikesDisplay=document.getElementById("dislikes");
let totalDisplay=document.getElementById("total");
let likeBtn=document.getElementById("like-btn");
let dislikeBtn=document.getElementById("dislike-btn");

let likes=0;
let dislikes=0;
let total=0;

likesDisplay.innerText=likes;
dislikesDisplay.innerText=dislikes;
totalDisplay.innerText=total;

likeBtn.addEventListener('click',function()
{
	likes++;
	likesDisplay.innerText=likes;
	total++;
	totalDisplay.innerText=total;

})
dislikeBtn.addEventListener('click',function()
{
	dislikes++;
	dislikesDisplay.innerText=dislikes;
	total++;
	totalDisplay.innerText=total;

})

