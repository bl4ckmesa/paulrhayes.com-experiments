var images = {};

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
	$("#i1_1").attr('src', "images/Transparent.gif");
	$("#i1_2").attr('src', "images/Transparent.gif");
	$("#i1_3").attr('src', "images/Transparent.gif");
	$("#i1_4").attr('src', "images/Transparent.gif");
	$("#i1_5").attr('src', "images/Transparent.gif");
	$("#i1_6").attr('src', "images/Transparent.gif");

	$("#img1").attr('src', "images/Transparent.gif");
	$("#img2").attr('src', "images/Transparent.gif");
	$("#img3").attr('src', "images/Transparent.gif");
	$("#img4").attr('src', "images/Transparent.gif");
	$("#img5").attr('src', "images/Transparent.gif");
	$("#img6").attr('src', "images/Transparent.gif");
}

function readURL(input,imgtag,cubesideimg) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(imgtag).attr('src', e.target.result);
            $(cubesideimg).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgside1").change(function(){ readURL(this,'#img1','#i1_1'); });
$("#imgside2").change(function(){ readURL(this,'#img2','#i1_2'); });
$("#imgside3").change(function(){ readURL(this,'#img3','#i1_3'); });
$("#imgside4").change(function(){ readURL(this,'#img4','#i1_4'); });
$("#imgside5").change(function(){ readURL(this,'#img5','#i1_5'); });
$("#imgside6").change(function(){ readURL(this,'#img6','#i1_6'); });



// cropperOptions = {
// 	uploadUrl:'php/img_save_to_file.php',
// 	cropUrl:'php/img_crop_to_file.php',
// 	zoomFactor:10,
// 	doubleZoomControls:true,
// 	rotateFactor:10,
// 	rotateControls:true,
// 	modal:true
// }		
// 		
// var cropper = new Croppic('croppic1', cropperOptions);
// cropper.destroy() 	// no need explaining here :) 
// cropper.reset() 	// destroys and then inits the cropper

populateSides();
