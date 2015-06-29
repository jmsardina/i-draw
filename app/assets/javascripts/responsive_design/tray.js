$(function resizeToolsDynamically(){
	$(window).on("resize", resizeColorButtons);

	function resizeColorButtons(){
		$("button.color").css( "height", $("button.color").width() );
	}
});