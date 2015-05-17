// function drop(){
//   $("#upload")
//     .bind("dragover", false)
//     .bind("dragenter", false)
//     .bind("drop", function(e) {
//       this.value = e.originalEvent.dataTransfer.getData("text") ||
//         e.originalEvent.dataTransfer.getData("text/plain");
//     return false;
//   });
// }

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
        // $("#all-cartoons").appendChild(image);
        debugger
        // imageHolderContext.clearRect(0, 0, canvas.width, canvas.height);
        // imageHolderContext.drawImage(image, canvas.width/25, 5, canvas.width/4, canvas.height/3.5);
      }
    });
  }
}