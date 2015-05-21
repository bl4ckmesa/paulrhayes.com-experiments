var images = {};
var xAngle = 0, yAngle = 0;
var globalimgtag = "";
var globalcubesideimg = "";

var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
	prop,
	el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
	if(typeof el.style[props[i]] !== "undefined") {
		prop = props[i];
		break;
	}
}

function rotateCube(direction,cube) {
	switch(direction) {
		case 'left':	yAngle -= 90; break; 
		case 'right':	yAngle += 90; break; 
		case 'up':		xAngle += 90; break; 
		case 'down':	xAngle -= 90; break;
	};
	document.getElementById(cube).style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}

$('body').keydown(function(evt) {
	if ($('#cube1:hover').length != 0) {
		switch(evt.keyCode) {
			case 37: rotateCube('left','cube1');	break;
			case 39: rotateCube('right','cube1');	break;
			case 38: rotateCube('up','cube1');		evt.preventDefault(); break;
			case 40: rotateCube('down','cube1');	evt.preventDefault(); break;
		};
	}
});

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
			setCropperImage(e.target.result);
			$('#cropperModal').modal("show");
			//$(imgtag).attr('src', e.target.result);
			//$(cubesideimg).attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}

function setCropperImage(imgsrc) {
	$("#cropperImage").attr('src', imgsrc);	
}

// Load page without hash, meaning it's a new project, basically.
function loadNewPage() {
	window.open('http://' + window.location.hostname + window.location.pathname, '_self');
}

/// INIT
if (window.location.hash) {
	session_hash = window.location.hash
} else {
	var session_hash = Math.random().toString(36).slice(2);
	location.hash = session_hash;
}
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
  console.log(cropBoxData);
  // Here we need to take the image and the cropBoxData and send it to
  // the server for cropping.
  //$(globalimgtag).attr('src', e.target.result);
  //$(globalcubesideimg).attr('src', e.target.result);
  $image.cropper('destroy');
});



