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

function populateSides() {
	document.getElementById('c1_1').innerHTML = '<img src="http://sciencenordic.com/sites/default/files/imagecache/620x/rabbit_0.jpg" style="width: 100%; height: 100%" />'
	document.getElementById('c1_2').innerHTML = i;
	document.getElementById('c1_3').innerHTML = "Three";
	document.getElementById('c1_4').innerHTML = "Four";
	document.getElementById('c1_5').innerHTML = "Five";
	document.getElementById('c1_6').innerHTML = "Six";
}

function readURL(input,imgtag) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(imgtag).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgside1").change(function(){ readURL(this,'#img1'); });
$("#imgside2").change(function(){ readURL(this,'#img2'); });
$("#imgside3").change(function(){ readURL(this,'#img3'); });
$("#imgside4").change(function(){ readURL(this,'#img4'); });
$("#imgside5").change(function(){ readURL(this,'#img5'); });
$("#imgside6").change(function(){ readURL(this,'#img6'); });
