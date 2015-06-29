function removeCartoon(){
  imageHolderContext.clearRect(0, 0, $("#drawing-canvas").width(), $("#drawing-canvas").height());
}

function placeCartoon(){
  imageHolderContext.drawImage(
  	currentImage,
  	$("#drawing-canvas").width()/40, // horizontal distance from top left corner of image to left-side of canvas
  	10, // vertical distance from top left corner of image to top of canvas
  	(($("#drawing-canvas").width()) * .85), // image width on canvas
  	(((($("#drawing-canvas").width()) * .85)/currentImage.width) * currentImage.height) // image height on canvas
  );
}

function currentProfile(){
  return $("#profile").attr("class");
}

function clearDrawingCanvas(){
  drawingContext.clearRect(0, 0, $("#drawing-canvas").width(), $("#drawing-canvas").height());
}