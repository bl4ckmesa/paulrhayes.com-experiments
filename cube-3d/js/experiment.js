var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

var xAngle = 0, yAngle = 0;
$('body').keydown(function(evt) {
	if ($('#cube:hover').length != 0) {
    	switch(evt.keyCode) {
        	case 37: // left
            	yAngle -= 90;
            	break;
	
        	case 38: // up
            	xAngle += 90;
            	evt.preventDefault();
            	break;
	
        	case 39: // right
            	yAngle += 90;
            	break;
	
        	case 40: // down
            	xAngle -= 90;
            	evt.preventDefault();
            	break;
    	};
    	document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	}
});

var i = 0; // Declare a global variable to hold the current iteration value.
var eye = [ "zero", "one", "two", "three", "four", "five", "six" ]
function changeClass(){
    $("#cube").removeClass("cube" + eye[i]);
        i = (i==6)?1:i+1;    
    $("#cube").addClass("cube" + eye[i]);
}
function addNumber() {
	document.getElementById('c1_1').innerHTML = '<img src="http://sciencenordic.com/sites/default/files/imagecache/620x/rabbit_0.jpg" style="width: 100%; height: 100%" />'
	document.getElementById('c1_2').innerHTML = i;
	document.getElementById('c1_3').innerHTML = "Three";
	document.getElementById('c1_4').innerHTML = "Four";
	document.getElementById('c1_5').innerHTML = "Five";
	document.getElementById('c1_6').innerHTML = "Six";
}
