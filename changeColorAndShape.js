var button1 = document.getElementById('button-1');
var button2 = document.getElementById('button-2');
var circle = document.getElementById('circle');

var color = ['red' , 'pink' , 'grey' , 'violet' , 'purple'];

button1.addEventListener('click',function(){
	button1.style.boxShadow='0px 0px 16px grey';
	button2.style.boxShadow='unset';
	var random = Math.floor( Math.random() * color.length);
	circle.style.background=color[random];
});

var triangle = ['arrow-up','arrow-down','arrow-left','arrow-right'];
button2.addEventListener('click',function(){
	button2.style.boxShadow='0px 0px 16px grey';
	button1.style.boxShadow='unset';
	var random2 = Math.floor( Math.random() * triangle.length);
	var temp = document.getElementById(triangle[random2]);
	temp.style.visibility="hidden";
});
