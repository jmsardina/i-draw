$(function(){
	setCanvases();
	listenOnSelections();
	listenOnCanvasClearing();
	setModals();
	recordHistory();
	listenForImageUpload();

	currentImage = document.createElement("img"); // not sure how to make this a local variable
});