function setModals(){
  setSearchModal();
  setAboutModal();
  setProfileModal();
  $(document).on("click", "button#close-modal", hideModal);
  
  function setProfileModal(){
    $("#profile-modal").hide();
    $("#profile-modal").show();
  }

  function setAboutModal(){
    $("#about-modal-base").hide()
    $("#about").on("click", function(){ 
      $("#about-modal-base").show()
    });
  }
  
  function setSearchModal(){
    $(".modal-base").hide();
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
    $("#profile-modal").hide();
  }
}