function listenOnCanvasClearing(){
  $("#start-over").on("click", clearCanvas);
  $(document).on("click", "#complete-drawing", completeDrawing);
  $(".eraser").on("click", erasing);


  function erasing(){
    drawingContext.globalCompositeOperation = "destination-out";
    $("#drawing-canvas").toggleClass("class", "erasing");
  }
 
  function clearCanvas(){
    if( confirm("We're about to erase your drawing!") ){
      clearDrawingCanvas();
    }
  }

  function completeDrawing(){
    $("#completed-drawing-modal").parents(".modal-base").show();
    completedDrawingContext.clearRect(0, 0, $("#completed-drawing").width(), $("#completed-drawing").height());
    var drawingCanvas = document.getElementById("drawing-canvas");
    var currentDrawingState = document.createElement("img");
    currentDrawingState.setAttribute("src", undoArray[undoArray.length-1]);
    completedDrawingContext.drawImage(currentDrawingState, 0, 0);

    if( currentProfile() === 'color'){
      completedDrawingContext.drawImage(
        currentImage,
        $("#completed-drawing").width()/40, // horizontal distance from top left corner of image to left-side of canvas
        10, // vertical distance from top left corner of image to top of canvas
        (($("#completed-drawing").width()) * .85), // image width on canvas
        (((($("#completed-drawing").width()) * .85)/currentImage.width) * currentImage.height) // image height on canvas
      );
    }
  }
}