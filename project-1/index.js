var gl;

initGL();

function initGL() {
	var canvas = document.getElementById("canvas");
	gl = canvas.getContext("experimental-webgl");
	gl.viewport(0,0,canvas.width, canvas.height); //with viewport method we do a rectangle
	gl.clearColor(1,0,0,1);
}

function draw() {
	gl.clear(gl.COLOR_BUFFER_BIT);
}
