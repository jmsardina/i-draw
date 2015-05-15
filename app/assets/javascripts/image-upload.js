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
  // debugger
    $.ajax(href, {
      method: "POST",
      "data": $form.serialize(),
      "complete": function(response){
        debugger
        $("#new-upload").html(response.responseText);
      }
    });
  }
}