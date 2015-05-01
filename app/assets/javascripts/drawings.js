$(function(){
  setTray();
  setCanvas();

  var image = document.getElementById("source");
  context.drawImage(image, 100,100);

  var paint;
  mouseCoordinates = new Array();

  $("#canvas").on("mousedown", mouseDown);
});

function setTray(){
  var canvasDiv = document.getElementById("canvasDiv");
  var tray = document.createElement("div");
  tray.setAttribute("id", "tray");
  tray.setAttribute("style", "height:50px;width:900px;background-color:yellow;border:1px solid;");
  canvasDiv.appendChild(tray);

  var pencil = document.createElement("button");
  pencil.setAttribute("id", "pencil");
  pencil.innerHTML = "pencil";
  tray.appendChild(pencil);
}

function setCanvas(){
  var canvasDiv = document.getElementById('canvasDiv');
  var canvas = document.createElement("canvas");
  canvas.setAttribute("width", "900px");
  canvas.setAttribute("height", "750px");
  canvas.setAttribute("id", "canvas");
  canvas.setAttribute("style", "border:1px solid;margin:auto")
  canvasDiv.appendChild(canvas);

  context = canvas.getContext("2d");
}


function mouseDown(e){
  paint = true;
  mouseCoordinates.push([e.offsetX, e.offsetY]);
  $(this).on("mousemove", mouseMove);
}

function mouseMove(e){
  if(paint){
    mouseCoordinates.push([e.offsetX, e.offsetY]);
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