var images = {};
var xAngle = 0, yAngle = 0;
var globalimgtag = "";
var globalcubesideimg = "";
var globalimgname = "";
var globalimgside = "";

var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
	prop,
	el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
	if(typeof el.style[props[i]] !== "undefined") {
		prop = props[i];
		break;
	}
}

function transImg(img) {
	img.onerror = '';
	img.src = 'images/Transparent.gif';
	return true;
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
	if (showhide == "hide") {
			$("#n1_1").attr('src','images/Transparent.gif');
			$("#n1_2").attr('src','images/Transparent.gif');
			$("#n1_3").attr('src','images/Transparent.gif');
			$("#n1_4").attr('src','images/Transparent.gif');
			$("#n1_5").attr('src','images/Transparent.gif');
			$("#n1_6").attr('src','images/Transparent.gif');
			$("#squaren1_1").attr('src', 'images/Transparent.gif');
			$("#squaren1_2").attr('src', 'images/Transparent.gif');
			$("#squaren1_3").attr('src', 'images/Transparent.gif');
			$("#squaren1_4").attr('src', 'images/Transparent.gif');
			$("#squaren1_5").attr('src', 'images/Transparent.gif');
			$("#squaren1_6").attr('src', 'images/Transparent.gif');
	} else {
			$("#n1_1").attr('src', "images/1.png");
			$("#n1_2").attr('src', "images/2.png");
			$("#n1_3").attr('src', "images/3.png");
			$("#n1_4").attr('src', "images/4.png");
			$("#n1_5").attr('src', "images/5.png");
			$("#n1_6").attr('src', "images/6.png");
			$("#squaren1_1").attr('src', "images/1.png");
			$("#squaren1_2").attr('src', "images/2.png");
			$("#squaren1_3").attr('src', "images/3.png");
			$("#squaren1_4").attr('src', "images/4.png");
			$("#squaren1_5").attr('src', "images/5.png");
			$("#squaren1_6").attr('src', "images/6.png");
	}
	//for (var i=1; i < 7; i++) {
	//	if (showhide == "hide") {
	//		$("#n1_"+i).attr('src','images/Transparent.gif')
	//		$("#squaren1_2").attr('src', 'images/Transparent.gif');
	//		//$("#img"+i).attr('src', 'images/Transparent.gif');
	//	} else {
	//		$("#n1_"+i).attr('src', "images/"+i+".png");
	//		$("#squaren1_2").attr('src', "images/"+i+".png");
	//		//$("#img"+i).attr('src', "images/"+i+".png");
	//	}
	//}
}

function readURL(input,imgtag,cubesideimg,imgname) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			globalimgtag = imgtag;
			globalcubesideimg  = cubesideimg;
			globalimgname = imgname;
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

function ajaxUpload(data) {
	var url = "php/crop.php";

	$.ajax(url, {
		type: 'post',
		data: data,
		dataType: 'json',
		processData: false,
		contentType: false,
		success: function (data) {
			$(globalimgtag).attr('src', 'php/img/' + project_dir + "/" + globalimgname + ".png");
			$(globalcubesideimg).attr('src', 'php/img/' + project_dir + "/" + globalimgname + ".png");
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log("just kidding, it wasn't.  Here is the data:", XMLHttpRequest);
		}
	});
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
var project_dir = session_hash.replace(/^[#]+/,"");
showNumbers();
//$(":file").filestyle({ input: false });

for (var i=1; i< 7; i++) {
	$("#i1_"+i).attr('src', "php/img/" + project_dir + "/c1_" + i + ".png");
	$("#img"+i).attr('src', "php/img/" + project_dir + "/c1_" + i + ".png");
}

// Listeners
$("#imgside1").change(function(){ globalimgside = "imgside1"; readURL(this,'#img1','#i1_1', 'c1_1'); });
$("#imgside2").change(function(){ globalimgside = "imgside2"; readURL(this,'#img2','#i1_2', 'c1_2'); });
$("#imgside3").change(function(){ globalimgside = "imgside3"; readURL(this,'#img3','#i1_3', 'c1_3'); });
$("#imgside4").change(function(){ globalimgside = "imgside4"; readURL(this,'#img4','#i1_4', 'c1_4'); });
$("#imgside5").change(function(){ globalimgside = "imgside5"; readURL(this,'#img5','#i1_5', 'c1_5'); });
$("#imgside6").change(function(){ globalimgside = "imgside6"; readURL(this,'#img6','#i1_6', 'c1_6'); });



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
	cropData = $image.cropper('getData');
	var json = [
		'{"x":' + cropData.x,
		'"y":' + cropData.y,
		'"height":' + cropData.height,
		'"width":' + cropData.width,
		'"rotate":' + cropData.rotate + '}'
	].join();
	var fileInput = document.getElementById(globalimgside);
	var file = fileInput.files[0];
	var formData = new FormData();
	formData.append('avatar_file', file);
	formData.append('avatar_data', json);
	formData.append('avatar_src', '../images/1.png');
	formData.append('avatar_dest', globalimgname);
	formData.append('avatar_projectdir', project_dir);
	ajaxUpload(formData);
	$image.cropper('destroy');
});



