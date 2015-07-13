function clearCanvas(canvas, context) {
  eval(context).clearRect(0, 0, $(canvas).width(), $(canvas).height());
}

function placeNewCartoon(canvas, context) {
  var imageWidth = ( ($(canvas).width()) * .85 );
  var imageHeight = ( (imageWidth/currentImage.width) * currentImage.height );
  var horizontalOffset = $(canvas).width()/40;
  var verticalOffset = ( $(canvas).height() - currentImage.height )/50;

  eval(context).drawImage(
  	currentImage,
  	horizontalOffset,
  	verticalOffset,
  	imageWidth,
  	imageHeight
  );
}

function copyDrawingToCanvas(originalCanvasId, receiverContext) {
  var originalCanvasElement = document.getElementById(originalCanvasId)
  var drawingURL = originalCanvasElement.toDataURL();
  var copiedDrawing = document.createElement("img");
  copiedDrawing.setAttribute("src", drawingURL);

  eval(receiverContext).drawImage( copiedDrawing, 0, 0 );
}

function currentProfile(){
  return $("#profile").attr("class");
}

function adjustImageOpacity(globalAlpha){
    clearCanvas("#image-holder", "imageHolderContext");
    imageHolderContext.globalAlpha = globalAlpha;
    placeNewCartoon("#image-holder", "imageHolderContext");
}

$(function toggleCanvasImage(){
    $(document).on("click", ".switch-holder", turnSwitch);

    function turnSwitch(){
        $(this).toggleClass("switch-on");
        $(this).children("div:first").toggleClass("switch-off");

        if( $(this).hasClass("switch-on") ){
            placeNewCartoon("#image-holder", "imageHolderContext");
        } else {
            clearCanvas("#image-holder", "imageHolderContext");
        }
    }
});

function showModal(modalIdSelector) {
  $(modalIdSelector).parents(".modal-base").removeClass("hidden");
}

function hideModal(modalIdSelector) {
  $(modalIdSelector).parents(".modal-base").addClass("hidden");
}