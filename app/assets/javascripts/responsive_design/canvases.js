$(function resizeCanvasDynamically(){
	$(window).on("resize", resizeCanvas);

	function resizeCanvas(){
		var globalAlpha = imageHolderContext.globalAlpha;
		var currentColor = drawingContext.strokeStyle;
		var currentTip = drawingContext.lineWidth;

		// this is a very expensive hack... it also results in decreased quality of drawing
		var canvas = document.getElementById("drawing-canvas");
		var canvasState = document.createElement("img");
		canvasState.setAttribute("src", canvas.toDataURL()); 

		$("canvas").attr( "height", $("#canvas-section").height() );
		$("canvas").attr( "width", $("#canvas-section").width() );
		placeCartoon();
		adjustImageOpacity( globalAlpha );
		drawingContext.drawImage(canvasState, 0, 0, $("#drawing-canvas").width(), $("#drawing-canvas").height());
		drawingContext.strokeStyle = currentColor;
		drawingContext.lineWidth = currentTip;
	}

	$(window).on("resize", closeCompletedDrawingModal);

	function closeCompletedDrawingModal(){
		$("#completed-drawing-modal").parents(".modal-base").hide();
	}
});