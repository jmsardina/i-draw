$(function(){
	$(window).on("resize", resizeCanvas);
	$(window).on("resize", hideModal("#completed-drawing-modal"));

	function resizeCanvas(){
		var currentOpacity = imageHolderContext.globalAlpha;
		var currentColor = drawingContext.strokeStyle;
		var currentTip = drawingContext.lineWidth;

		var drawingCanvas = document.getElementById("drawing-canvas");
		var dataURL = drawingCanvas.toDataURL();
		var copiedDrawing = document.createElement("img");
		copiedDrawing.setAttribute("src", dataURL);

		$("canvas").attr( "height", $(".canvas-section").height() );
		$("canvas").attr( "width", $(".canvas-section").width() );

		drawingContext.drawImage( copiedDrawing, 0, 0)

		adjustImageOpacity( currentOpacity );
		placeNewCartoon( '#image-holder', 'imageHolderContext' );
		drawingContext.strokeStyle = currentColor;
		drawingContext.lineWidth = currentTip;
	}
});