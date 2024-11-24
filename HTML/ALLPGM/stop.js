let minTag=document.getElementById('min');
let secTag=document.getElementById('sec');
let msecTag=document.getElementById('m-sec');

let startBtn=document.getElementById('start-btn');
let stopBtn=document.getElementById('stop-btn');
let resetBtn=document.getElementById('reset-btn');

let milliSeconds=0;
let seconds=0;
let minutes=0;
let interval=0;

let flag=false;

function startTimer()
{
	milliSeconds=milliSeconds+10;
	msecTag.innerText=milliSeconds;
	if(milliSeconds===1000)
	{
		seconds=seconds+1;
		secTag.innerText=addZero(seconds);
		milliSeconds=0;
		if(seconds===60)
		{
			minutes=minutes+1;
			minTag.innerText=addZero(minutes);
			seconds=0;
		}
	}
}

startBtn.addEventListener('click',()=>{
	if(!flag)
	{
		interval=setInterval(startTimer,10);
		flag=true;
	}
})

stopBtn.addEventListener('click',()=>{
	clearInterval(interval);
})

resetBtn.addEventListener('click',()=>{
	clearInterval(interval);
	minutes=0;
	seconds=0;
	milliSeconds=0;
	flag=false;

	msecTag.innerText='00';
	secTag.innerText='00';
	min.innerText='00';
})

function addZero(time)
{
	if(time<=9)
	{
		return "0"+time;
	}
	else
	{
        return time;
	}

}





