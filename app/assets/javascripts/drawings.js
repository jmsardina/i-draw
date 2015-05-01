$(function(){
  var canvasDiv = document.getElementById('canvasDiv');
  canvas = document.createElement("canvas");
  canvas.setAttribute("width", "900px");
  canvas.setAttribute("height", "600px");
  canvas.setAttribute("id", "canvas");
  canvasDiv.appendChild(canvas);

  context = canvas.getContext("2d");

  var paint;
  // xMovement = new Array();
  // yMovement = new Array();
  mouseCoordinates = new Array();
  $("#canvas").on("mousedown", mouseDown);
});

function mouseDown(e){
  paint = true;
  mouseCoordinates.push([e.clientX, e.clientY])
  $(this).on("mousemove", mouseMove);
}

function mouseMove(e){
  if(paint){
    mouseCoordinates.push([e.clientX, e.clientY])
    $(this).on("mouseup", mouseUp);

  // var xPosition = e.clientX;
  // var yPosition = e.clientY;

  // xMovement = new Array();
  // yMovement = new Array();
    // xMovement.push(e.clientX);
    // yMovement.push(e.clientY);
    // mouseMove(e);
    draw(e);
  }
}

function mouseUp(e){
  // xMovement.push(e.clientX);
  // yMovement.push(e.clientY);
  paint = false;
}

function draw(e){
  if(paint){
    context.beginPath();
    context.strokeStyle = "green";
    context.lineJoin = "round";
    context.moveTo(mouseCoordinates[0][0], mouseCoordinates[0][1])
    context.lineTo(e.clientX, e.clientY)
    context.stroke();
  }
}