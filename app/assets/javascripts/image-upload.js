function listenForImageUpload(){
  $("#new-cartoon").children("form:first").on("submit", uploadNewImage);

  function uploadNewImage(e){
    e.preventDefault();
    var $form = $(this);
    var href = $form.attr("action");
    var formData = new FormData($(this)[0]);

    $.ajax(href, {
      method: "POST",
      "data": formData,
      cache: false,
      contentType: false,
      processData: false,
      "complete": function(response){
        var image = $(response.responseText)[0];
        debugger
        alert(image)
        // imageHolderContext.clearRect(0, 0, canvas.width, canvas.height);
        // imageHolderContext.drawImage(image, canvas.width/25, 5, canvas.width/4, canvas.height/3.5);
      }
    });
  }
}