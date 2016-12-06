$(document).ready(function(){

		function showProfession(){
			$(".profession").hide().delay(1250).fadeIn(2500);
		}
		showProfession();

		function showCaret(){
			$(".more-below").hide().delay(2750).fadeIn(2000);
		}
		showCaret();

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