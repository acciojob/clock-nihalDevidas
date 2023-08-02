//your JS code here. If required.

const timeEle = document.getElementById("timer");


//let timme = `
//${tim.getMonth()}/${tim.getDate()}/${tim.getFullYear()}, ${tim.getHours()}:${tim.getMinutes()}:${tim.getSeconds()}`;


setInterval(()=>{
	const tim = new Date();
	const ti = tim.toLocaleString("en-us",{hour12:true});
	
	timeEle.innerHTML = ti;
},1000);
