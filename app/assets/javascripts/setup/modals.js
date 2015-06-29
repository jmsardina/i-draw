function setModals(){
  $(".modal-base").hide(); // this will hide all modals
  setAboutModal();
  setSearchModal();
  $(document).on("click", ".close-modal", hideModal);

  function setAboutModal(){
    $("#about").on("click", function(){ 
      $("#about-modal-base").show()
    });
  }
  
  function setSearchModal(){
    $(".search").children("form:first").on("submit", showSearchModal);

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
  }

  function hideModal(){
    $(".modal-base").hide();
  }
}