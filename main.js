canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x=20;
greencar_y=500;
greencar_width=50;
greencar_height=100;
function add() {
	background_imagetag=new Image();
	background_imagetag.onload=uploadBackground;
	background_imagetag.src=background_image;
	greencar_imagetag=new Image();
	greencar_imagetag.onload=uploadgreencar;
	greencar_imagetag.src=greencar_image;
}

function uploadBackground() {
  ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imagetag,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0){

		greencar_y=greencar_y-10;
		console.log()
		uploadBackground();
		uploadgreencar();

	}
}

function down()
{
	
}

function left()
{
}
	
function right()
{
	if(greencar_x<=700){

		greencar_x=greencar_x+10;
		console.log()
		uploadBackground();
		uploadgreencar();
	} }
	if(greencar_x==800){
		window.alert("YOU win")
	}