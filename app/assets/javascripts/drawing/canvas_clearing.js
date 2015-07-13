$(function(){
    $("#start-over").on("click", function(){
        if ( confirm("We're about to erase your drawing!") ){
            clearCanvas("#drawing-canvas", "drawingContext");
        }
    });

    $(document).on("click", "#complete-drawing", completeDrawing);
    $(".eraser").on("click", erasing);


    function erasing(){
        drawingContext.globalCompositeOperation = "destination-out";
        $("#drawing-canvas").toggleClass("class", "erasing");
    }

    function completeDrawing(){
        showModal("#completed-drawing-modal");
        clearCanvas("#completed-drawing", "completedDrawingContext");
        copyDrawingToCanvas("drawing-canvas", "completedDrawingContext");

        if ( currentProfile() === 'coloring' ) {
            placeNewCartoon("#completed-drawing", "completedDrawingContext")
        }
    }
});