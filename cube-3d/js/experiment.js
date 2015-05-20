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

function rotateCube(direction) {
	switch(direction) {
    	case 'left':
        	yAngle -= 90;
        	break;

    	case 'up':
        	xAngle += 90;
        	break;

    	case 'right':
        	yAngle += 90;
        	break;

    	case 'down':
        	xAngle -= 90;
        	break;
	};
	document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

}

function showNumbers(showhide) {
	for (var i=1; i < 7; i++) {
		if (showhide == "hide") {
			$("#n1_"+i).attr('src','images/Transparent.gif')
			$("#img"+i).attr('src', 'images/Transparent.gif');
		} else {
			$("#n1_"+i).attr('src', "images/"+i+".png");
			$("#img"+i).attr('src', "images/"+i+".png");
		}
	}
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

function setimage(imgsrc) {
	$("#cropperImage").attr('src', imgsrc);	
}

/// INIT
showNumbers();
//$(":file").filestyle({ input: false });

for (var i=1; i< 7; i++) {
	$("#i1_"+i).attr('src', "images/Transparent.gif");
}

// Listeners
$("#imgside1").change(function(){ readURL(this,'#img1','#i1_1'); });
$("#imgside2").change(function(){ readURL(this,'#img2','#i1_2'); });
$("#imgside3").change(function(){ readURL(this,'#img3','#i1_3'); });
$("#imgside4").change(function(){ readURL(this,'#img4','#i1_4'); });
$("#imgside5").change(function(){ readURL(this,'#img5','#i1_5'); });
$("#imgside6").change(function(){ readURL(this,'#img6','#i1_6'); });

// Cropping
var cropperOptions = {
	autoCropArea: 1,
	aspectRatio: 1/1,
	modal: true,
	built: function () {
		// Strict mode: set crop box data first
		$image.cropper('setCropBoxData', cropBoxData);
		$image.cropper('setCanvasData', canvasData);
	}
}
var $image = $('#cropper > img'),
    cropBoxData,
    canvasData;

$('#cropperModal').on('shown.bs.modal', function () {
  $image.cropper(cropperOptions);
}).on('hidden.bs.modal', function () {
  cropBoxData = $image.cropper('getCropBoxData');
  canvasData = $image.cropper('getCanvasData');
  $image.cropper('destroy');
});



