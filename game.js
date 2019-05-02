alert("Hey! You are entering the game. Good luck!");

$(document).ready(function(){
	//run when loaded
	

  	$('#clicks').show();
  		items.clicks = localStorage.clicks;
  	
	$("#testing2").delay(1000).fadeIn(5000);
	$("#total-clicks").text(items.clicks);
});


var items = {};
items.topic = "";
items.clicker = 0;
items.clicker2 = 0;

let counter = 0;
// runs every second
window.setInterval(function(){
	counter++;
	$("#testing").html("<i class='fa fa-camera'></i>" + counter);
	
}, 1000);

let clicks = 0;

$("clicks").click(function() {clicks += 1});
 


 
var button = document.getElementById("clicker"),
  count = 0;
button.onclick = function() {
  count += 1;
};

function save(){
	localStorage.setItem("clicker", items.clicker);
	
	$('#saving-status-2').fadeIn(500).delay(2000).fadeOut(500);
}