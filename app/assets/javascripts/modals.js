function setModals(){
  $("#about-modal-base").hide()
  $(".modal-base").hide();
  $(document).on("click", "button#close-modal", hideModal);
  $("#about").on("click", showAboutModal);
  $(".search").children("form").on("submit", showSearchModal);
  
  function showAboutModal(){
    $("#about-modal-base").show()
  }
  
  function showSearchModal(e){
    e.preventDefault();
    var $form = $(this);
    var href = "/search"

    $.ajax(href, {
      method: "GET",
      "data": $form.serialize(),
      "complete": function(response){
        $("div#results-div").html(response.responseText);
        $("#search-modal-base").show();
      }
    });
  }

  function hideModal(){
    $(".modal-base").hide();
  }
}