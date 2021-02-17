// Accessing the elements //
var before = document.getElementById('before');
var after = document.getElementById('after');
var myTran = document.getElementById('me');



// To make the button be focused on load //
window.onload = function() { 
            document.getElementById("after").focus(); 
}


// Switching between image functions //
function bfr() {
	onclick = document.getElementById('me').src = './img/before.jpg'
}

function afr() {
	onclick = document.getElementById('me').src = './img/after.jpg'
}

// Event Listeners for buttons to switch images //
before.addEventListener('click', bfr);
after.addEventListener('click', afr);