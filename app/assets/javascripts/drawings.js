$(function(){
  var canvasDiv = document.getElementById('canvasDiv');
  canvas = document.createElement("canvas");
  canvas.setAttribute("width", "900px");
  canvas.setAttribute("height", "800px");
  canvas.setAttribute("id", "canvas");
  canvas.setAttribute("style", "border:1px solid;margin:auto")
  canvasDiv.appendChild(canvas);

  context = canvas.getContext("2d");

  var image = document.getElementById("source");
  context.drawImage(image, 100,100);

  var paint;
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
    draw(e);
  }
}

function mouseUp(e){
  paint = false;
}

function draw(e){
  if(paint){
    context.beginPath();
    context.strokeStyle = "green";
    context.lineJoin = "round";

    context.moveTo(mouseCoordinates[mouseCoordinates.length-2][0], mouseCoordinates[mouseCoordinates.length-2][1])
    context.lineTo(mouseCoordinates[mouseCoordinates.length-1][0], mouseCoordinates[mouseCoordinates.length-1][1])
    context.stroke();
  }
}