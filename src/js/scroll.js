$(document)
	.ready(function (){
				$('a[ng-href^="#"]').click(function(event) {
				    var target = $( $(this).attr('ng-href') );

				    if( target.length ) {
				        event.preventDefault();
				        $('html, body').animate({
				            scrollTop: target.offset().top
				        }, 800);
				    }
				});
			});
