function adjustImageOpacity(globalAlpha){
    removeCartoon();
    imageHolderContext.globalAlpha = globalAlpha;
    placeCartoon();
}

function toggleCanvasImage(){
  $(document).on("click", ".switch-holder", turnSwitch);

  function turnSwitch(){
    $(this).toggleClass("switch-on");
    $(this).children("div:first").toggleClass("switch-off");
    
    if($(this).hasClass("switch-on")){
      placeCartoon();
    } else {
      removeCartoon();
    }
  }
}