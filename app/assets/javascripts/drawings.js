$(function(){
  var canvasDiv = document.getElementById('canvasDiv');
  canvas = document.createElement("canvas");
  canvas.setAttribute("width", "500px");
  canvas.setAttribute("height", "300px");
  canvas.setAttribute("id", "canvas");
  canvasDiv.appendChild(canvas);

  context = canvas.getContext("2d");

  var paint;
  $("#canvas").on("mousedown", mouseDown);
});

function mouseDown(){
  paint = true;
  $(this).on("mousemove", mouseMove);
}

function mouseMove(e){
  $(this).on("mouseup", mouseUp);

  var xPosition = e.clientX;
  var yPosition = e.clientY;

  xMovement = new Array();
  yMovement = new Array();

  xMovement.push(xPosition);
  yMovement.push(yPosition);
  draw();
}

function mouseUp(e){
  xMovement.push(e.clientX);
  yMovement.push(e.clientY);
  paint = false;
}

function draw(){
  if(paint){
    context.beginPath();
    context.strokeStyle = "blue";
    context.moveTo(xMovement[0], yMovement[0])
    context.lineTo(100, 100)
    context.stroke();
  }
}