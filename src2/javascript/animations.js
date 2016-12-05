$(document).ready(function(){

		function upward(){
				$(".profession").hide();
		    $(".welcome").animate({top:'-=700'}, 1000);
		    $(".welcome").animate({top:'+=225'}, 1500);
		    $(".welcome").animate({top:'-=50'}, 1000, showProfession);
		    // $(".profession").show();
		    console.log("hello");
		}

		function showProfession(){
			$(".profession").hide().delay(1250).fadeIn(1500);
		}

		showProfession();

		// upward();
});