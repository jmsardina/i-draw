$(function setModals(){
    $(".modal-base").addClass("hidden");
    showModal("#profile-modal");
    setAboutModal();

    setSearchModal();
    $(document).on("click", ".close-modal", function(){ 
        hideModal(this);
    });

    function setAboutModal(){
        $("#about").on("click", function(){ 
            showModal("#about-modal");
        });
    }

    function setSearchModal(){
      $(".search").children("form:first").on("submit", showSearchModal);

        function showSearchModal(e){
            e.preventDefault();
            var $form = $(this);
            var href = $form.attr("action")

            $.ajax(href, {
              method: "GET",
              "data": $form.serialize(),
              "complete": function(response){
                $("div#results-div").html(response.responseText);
                showModal("#search-modal");
              }
            });
        }
    }
});