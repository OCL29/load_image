var c1 = document.getElementById('c1'); //get  c1 canvas element
var ctx = c1.getContext("2d");

var image = new Image();

image.onload = function(){
  console.log("Loaded image");
  ctx.drawImage(image, 0, 0, c1.width, c1.height); //draw image to c1 canvas
}

image.src = "img/lena.jpg" //assign image
