function adjustImageOpacity(globalAlpha){
    imageHolderContext.clearRect(0, 0, canvas.width, canvas.height);
    imageHolderContext.globalAlpha = globalAlpha;
    imageHolderContext.drawImage(currentImage, canvas.width/25, 5, canvas.width/4, canvas.height/3.5);
}

function toggleCanvasImage(){
  $(document).on("click", ".switch-holder", turnSwitch);

  function turnSwitch(){
    $(this).toggleClass("switch-on");
    $(this).children("div:first").toggleClass("js-off");
    
    if($(this).hasClass("switch-on")){
      imageHolderContext.drawImage(currentImage, canvas.width/25, 5, canvas.width/4, canvas.height/3.5)
    } else {
      imageHolderContext.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}