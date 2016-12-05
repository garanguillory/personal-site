$(document).ready(function(){

		function showProfession(){
			$(".profession").hide().delay(1250).fadeIn(1500);
		}
		showProfession();

		$('a[href^="#"]').click(function(event) {
		    var target = $( $(this).attr('href') );
		    
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, 800);
		    }
		});
});