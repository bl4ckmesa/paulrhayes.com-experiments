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
	console.log("xAngle: ", xAngle, ", yAngle: ", yAngle);
}

function rotateToSide(side, cube) {
	switch(side) {
		case 'one':		xAngle = -90; yAngle = 0; break;
		case 'two':		xAngle = 0; yAngle = 0; break;
		case 'three':	xAngle = 0; yAngle = -90; break;
		case 'four':	xAngle = 0; yAngle = 180; break;
		case 'five':	xAngle = 0; yAngle = 90; break;
		case 'six':		xAngle = 90; yAngle = 180; break;
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
	} else if ($('#cube2:hover').length != 0) {
		switch(evt.keyCode) {
			case 37: rotateCube('left','cube2');	break;
			case 39: rotateCube('right','cube2');	break;
			case 38: rotateCube('up','cube2');		evt.preventDefault(); break;
			case 40: rotateCube('down','cube2');	evt.preventDefault(); break;
		};
	} else if ($('#cube3:hover').length != 0) {
		switch(evt.keyCode) {
			case 37: rotateCube('left','cube3');	break;
			case 39: rotateCube('right','cube3');	break;
			case 38: rotateCube('up','cube3');		evt.preventDefault(); break;
			case 40: rotateCube('down','cube3');	evt.preventDefault(); break;
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

			$("#n2_1").attr('src','images/Transparent.gif');
			$("#n2_2").attr('src','images/Transparent.gif');
			$("#n2_3").attr('src','images/Transparent.gif');
			$("#n2_4").attr('src','images/Transparent.gif');
			$("#n2_5").attr('src','images/Transparent.gif');
			$("#n2_6").attr('src','images/Transparent.gif');
			$("#squaren2_1").attr('src', 'images/Transparent.gif');
			$("#squaren2_2").attr('src', 'images/Transparent.gif');
			$("#squaren2_3").attr('src', 'images/Transparent.gif');
			$("#squaren2_4").attr('src', 'images/Transparent.gif');
			$("#squaren2_5").attr('src', 'images/Transparent.gif');
			$("#squaren2_6").attr('src', 'images/Transparent.gif');

			$("#n3_1").attr('src','images/Transparent.gif');
			$("#n3_2").attr('src','images/Transparent.gif');
			$("#n3_3").attr('src','images/Transparent.gif');
			$("#n3_4").attr('src','images/Transparent.gif');
			$("#n3_5").attr('src','images/Transparent.gif');
			$("#n3_6").attr('src','images/Transparent.gif');
			$("#squaren3_1").attr('src', 'images/Transparent.gif');
			$("#squaren3_2").attr('src', 'images/Transparent.gif');
			$("#squaren3_3").attr('src', 'images/Transparent.gif');
			$("#squaren3_4").attr('src', 'images/Transparent.gif');
			$("#squaren3_5").attr('src', 'images/Transparent.gif');
			$("#squaren3_6").attr('src', 'images/Transparent.gif');
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

			$("#n2_1").attr('src', "images/1.png");
			$("#n2_2").attr('src', "images/2.png");
			$("#n2_3").attr('src', "images/3.png");
			$("#n2_4").attr('src', "images/4.png");
			$("#n2_5").attr('src', "images/5.png");
			$("#n2_6").attr('src', "images/6.png");
			$("#squaren2_1").attr('src', "images/1.png");
			$("#squaren2_2").attr('src', "images/2.png");
			$("#squaren2_3").attr('src', "images/3.png");
			$("#squaren2_4").attr('src', "images/4.png");
			$("#squaren2_5").attr('src', "images/5.png");
			$("#squaren2_6").attr('src', "images/6.png");

			$("#n3_1").attr('src', "images/1.png");
			$("#n3_2").attr('src', "images/2.png");
			$("#n3_3").attr('src', "images/3.png");
			$("#n3_4").attr('src', "images/4.png");
			$("#n3_5").attr('src', "images/5.png");
			$("#n3_6").attr('src', "images/6.png");
			$("#squaren3_1").attr('src', "images/1.png");
			$("#squaren3_2").attr('src', "images/2.png");
			$("#squaren3_3").attr('src', "images/3.png");
			$("#squaren3_4").attr('src', "images/4.png");
			$("#squaren3_5").attr('src', "images/5.png");
			$("#squaren3_6").attr('src', "images/6.png");
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
	$("#squarei1_"+i).attr('src', "php/img/" + project_dir + "/c1_" + i + ".png");

	$("#i2_"+i).attr('src', "php/img/" + project_dir + "/c2_" + i + ".png");
	$("#squarei2_"+i).attr('src', "php/img/" + project_dir + "/c2_" + i + ".png");

	$("#i3_"+i).attr('src', "php/img/" + project_dir + "/c3_" + i + ".png");
	$("#squarei3_"+i).attr('src', "php/img/" + project_dir + "/c3_" + i + ".png");
}

// Listeners
$("#imgside1_1").change(function(){ globalimgside = "imgside1_1"; readURL(this,'#squarei1_1','#i1_1', 'c1_1'); });
$("#imgside1_2").change(function(){ globalimgside = "imgside1_2"; readURL(this,'#squarei1_2','#i1_2', 'c1_2'); });
$("#imgside1_3").change(function(){ globalimgside = "imgside1_3"; readURL(this,'#squarei1_3','#i1_3', 'c1_3'); });
$("#imgside1_4").change(function(){ globalimgside = "imgside1_4"; readURL(this,'#squarei1_4','#i1_4', 'c1_4'); });
$("#imgside1_5").change(function(){ globalimgside = "imgside1_5"; readURL(this,'#squarei1_5','#i1_5', 'c1_5'); });
$("#imgside1_6").change(function(){ globalimgside = "imgside1_6"; readURL(this,'#squarei1_6','#i1_6', 'c1_6'); });

$("#imgside2_1").change(function(){ globalimgside = "imgside2_1"; readURL(this,'#squarei2_1','#i2_1', 'c2_1'); });
$("#imgside2_2").change(function(){ globalimgside = "imgside2_2"; readURL(this,'#squarei2_2','#i2_2', 'c2_2'); });
$("#imgside2_3").change(function(){ globalimgside = "imgside2_3"; readURL(this,'#squarei2_3','#i2_3', 'c2_3'); });
$("#imgside2_4").change(function(){ globalimgside = "imgside2_4"; readURL(this,'#squarei2_4','#i2_4', 'c2_4'); });
$("#imgside2_5").change(function(){ globalimgside = "imgside2_5"; readURL(this,'#squarei2_5','#i2_5', 'c2_5'); });
$("#imgside2_6").change(function(){ globalimgside = "imgside2_6"; readURL(this,'#squarei2_6','#i2_6', 'c2_6'); });

$("#imgside3_1").change(function(){ globalimgside = "imgside3_1"; readURL(this,'#squarei3_1','#i3_1', 'c3_1'); });
$("#imgside3_2").change(function(){ globalimgside = "imgside3_2"; readURL(this,'#squarei3_2','#i3_2', 'c3_2'); });
$("#imgside3_3").change(function(){ globalimgside = "imgside3_3"; readURL(this,'#squarei3_3','#i3_3', 'c3_3'); });
$("#imgside3_4").change(function(){ globalimgside = "imgside3_4"; readURL(this,'#squarei3_4','#i3_4', 'c3_4'); });
$("#imgside3_5").change(function(){ globalimgside = "imgside3_5"; readURL(this,'#squarei3_5','#i3_5', 'c3_5'); });
$("#imgside3_6").change(function(){ globalimgside = "imgside3_6"; readURL(this,'#squarei3_6','#i3_6', 'c3_6'); });

// Cropping
var cropperOptions = {
	autoCropArea: 1,
	aspectRatio: 1/1,
	autoCropArea: 1,
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



